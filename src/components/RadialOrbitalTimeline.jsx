import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";

export default function RadialOrbitalTimeline({ timelineData = [] }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [activeNodeId, setActiveNodeId] = useState(null);

  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const total = timelineData.length;

  const getRelatedItems = (itemId) => {
    const current = timelineData.find((x) => x.id === itemId);
    return current ? current.relatedIds || [] : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status) => {
    if (status === "completed") return "rotlBadge completed";
    if (status === "in-progress") return "rotlBadge progress";
    return "rotlBadge pending";
  };

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const centerViewOnNode = (nodeId) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    if (nodeIndex < 0) return;
    const targetAngle = (nodeIndex / total) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const next = {};
      Object.keys(prev).forEach((k) => (next[k] = false));

      const wasOpen = !!prev[id];
      next[id] = !wasOpen;

      if (!wasOpen) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const related = getRelatedItems(id);
        const pulses = {};
        related.forEach((rid) => (pulses[rid] = true));
        setPulseEffect(pulses);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return next;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;

    const t = setInterval(() => {
      setRotationAngle((prev) => {
        const a = (prev + 0.3) % 360;
        return Number(a.toFixed(3));
      });
    }, 50);

    return () => clearInterval(t);
  }, [autoRotate]);

  const positions = useMemo(() => {
    const radius = 200;
    return timelineData.map((_, index) => {
      const angle = ((index / total) * 360 + rotationAngle) % 360;
      const rad = (angle * Math.PI) / 180;

      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);

      const zIndex = Math.round(100 + 50 * Math.cos(rad));
      const opacity = Math.max(
        0.4,
        Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2))
      );

      return { x, y, angle, zIndex, opacity };
    });
  }, [timelineData, rotationAngle, total]);

  return (
    <div
      className="rotlRoot"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="rotlStage">
        <div className="rotlOrbit" ref={orbitRef} style={{ perspective: "1000px" }}>
          {/* center orb */}
          <div className="rotlCore">
            <div className="rotlPing ping1" />
            <div className="rotlPing ping2" />
            <div className="rotlCoreInner" />
          </div>

          {/* ring */}
          <div className="rotlRing" />

          {timelineData.map((item, index) => {
            const pos = positions[index];
            const isExpanded = !!expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = !!pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              zIndex: isExpanded ? 200 : pos.zIndex,
              opacity: isExpanded ? 1 : pos.opacity,
            };

            const auraSize = item.energy * 0.5 + 40;
            const auraStyle = {
              width: `${auraSize}px`,
              height: `${auraSize}px`,
              left: `-${(auraSize - 40) / 2}px`,
              top: `-${(auraSize - 40) / 2}px`,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="rotlNodeWrap"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`rotlAura ${isPulsing ? "pulsing" : ""}`}
                  style={auraStyle}
                />

                <div
                  className={[
                    "rotlNode",
                    isExpanded ? "expanded" : "",
                    isRelated ? "related" : "",
                  ].join(" ")}
                >
                  <Icon size={16} />
                </div>

                <div className={`rotlLabel ${isExpanded ? "big" : ""}`}>
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="rotlCard" onClick={(e) => e.stopPropagation()}>
                    <div className="rotlCardStick" />

                    <div className="rotlCardTop">
                      <span className={getStatusStyles(item.status)}>
                        {item.status === "completed"
                          ? "COMPLETE"
                          : item.status === "in-progress"
                          ? "IN PROGRESS"
                          : "PENDING"}
                      </span>

                      <span className="rotlDate">{item.date}</span>
                    </div>

                    <div className="rotlCardTitle">{item.title}</div>
                    <div className="rotlCardText">{item.content}</div>

                    <div className="rotlEnergy">
                      <div className="rotlEnergyRow">
                        <span className="rotlEnergyLabel">
                          <Zap size={12} /> Energy Level
                        </span>
                        <span className="rotlEnergyVal">{item.energy}%</span>
                      </div>
                      <div className="rotlEnergyBar">
                        <div
                          className="rotlEnergyFill"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    {(item.relatedIds || []).length > 0 && (
                      <div className="rotlRelated">
                        <div className="rotlRelatedHead">
                          <LinkIcon size={12} />
                          <span>CONNECTED NODES</span>
                        </div>
                        <div className="rotlRelatedBtns">
                          {item.relatedIds.map((rid) => {
                            const rItem = timelineData.find((x) => x.id === rid);
                            return (
                              <button
                                key={rid}
                                className="rotlMiniBtn"
                                onClick={() => toggleItem(rid)}
                                type="button"
                              >
                                {rItem?.title || `Node ${rid}`}
                                <ArrowRight size={10} />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}