import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInUpDiv = ({ children, delay = 0.5 }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.7, delay: delay }}>
			{children}
		</motion.div>
	);
};

export default FadeInUpDiv;
