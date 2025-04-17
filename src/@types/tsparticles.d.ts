declare module "@tsparticles/react" {
    import type { Engine } from "@tsparticles/engine";
    import type { ISourceOptions } from "@tsparticles/engine";
    import type { ComponentProps } from "react";
  
    interface ParticlesProps extends ComponentProps<"div"> {
      id?: string;
      options?: ISourceOptions;
      init?: (engine: Engine) => Promise<void>;
    }
  
    const Particles: (props: ParticlesProps) => JSX.Element;
    
    export default Particles;
  }