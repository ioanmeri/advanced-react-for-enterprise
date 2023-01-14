import React from 'react';
import { FontSize } from '@ds.e/foundation';
interface TextProps {
    size?: keyof typeof FontSize;
    children: any;
}
declare const Text: React.FC<TextProps>;
export default Text;
