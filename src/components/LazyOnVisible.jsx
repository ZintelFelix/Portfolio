import { useEffect, useRef, useState } from "react";

export default function LazyOnVisible({ importer, fallback = null, rootMargin = "600px 0px", id, className }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [Comp, setComp] = useState(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { rootMargin }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [rootMargin]);

    useEffect(() => {
        if (!visible) return;
        let active = true;
        importer().then((m) => {
            if (!active) return;
            setComp(() => m.default);
        });
        return () => {
            active = false;
        };
    }, [visible, importer]);

    return (
        <div id={id} ref={ref} className={className}>
            {Comp ? <Comp /> : fallback}
        </div>
    );
}
