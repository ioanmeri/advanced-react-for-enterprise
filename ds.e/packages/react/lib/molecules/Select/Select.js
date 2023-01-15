import React, { useState, useRef, useEffect } from 'react';

const Select = ({ options = [], label = "Please select an option", onOptionSelected: handler, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            React.createElement("span", null, label),
            React.createElement("svg", { className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, width: "1rem", height: "1rem", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement("path", { d: "M19 9l-7 7-7-7" }))),
        isOpen ? (React.createElement("ul", { style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, optionIndex) => {
            return (React.createElement("li", { className: "dse-select__option", onClick: () => onOptionSelected(option, optionIndex), key: option.value }, option.label));
        }))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
