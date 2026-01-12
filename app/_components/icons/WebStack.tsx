import { ComponentPropsWithoutRef } from "react";
import { Layers } from "lucide-react";

export const WebStackIcon = (
    props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
    return (
        <Layers
            size={props.size}
            className={props.className}
            {...props}
        />
    );
};
