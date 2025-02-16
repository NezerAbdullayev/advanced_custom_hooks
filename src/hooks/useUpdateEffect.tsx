import {useEffect,useRef} from "react"

export const useUpdateEffect=(effect: React.EffectCallback, deps: any[])=> {
    const mounted = useRef(false);
    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
        return;
      }
      return effect();
    }, deps);
  }