import { ComponentPropsWithoutRef } from "react";
import { Database } from "lucide-react";

export const SqlIcon = (
    props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
    return (
        <Database
            size={props.size}
            className={props.className}
            {...props}
        />
    );
};
