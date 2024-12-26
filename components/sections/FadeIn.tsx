import dynamic from "next/dynamic";


export const FadeIn = dynamic(() => import("@/components/animations/FadeIn").then(mod => mod.FadeIn))
