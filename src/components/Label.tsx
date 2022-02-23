import { styled } from "@stitches/react";

type LabelProps = {
    fontSize: number, 
    lineHeight: number,
    marginBottom: number, 
    color: string, 
    display: string
    
};


export default function Label(labelProps: LabelProps) {
    return styled('label', labelProps);
}