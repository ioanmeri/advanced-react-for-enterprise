import React, { useEffect, useRef, useState } from 'react';

import Text from '../../atoms/Text';

interface SelectOption {
  label: string;
  value: string;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FunctionComponent<SelectProps> = ({
  options = [],
  label = "Please select an option",
  onOptionSelected: handler,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }
    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  let selectedOption = null;

  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button
        aria-controls="dse-select-list"
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        ref={labelRef}
        className="dse-select__label"
        onClick={() => onLabelClick()}
      >
        <Text>{selectedIndex === null ? label : selectedOption?.label}</Text>
        <svg
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"
          }`}
          width="1rem"
          height="1rem"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen ? (
        <ul
          role="menu"
          aria-hidden={isOpen ? undefined : false}
          id="dse-select-list"
          style={{ top: overlayTop }}
          className="dse-select__overlay"
        >
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;

            const renderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => {
                return {
                  className: `dse-select__option ${
                    isSelected ? "dse-select__option--selected" : ""
                  }`,
                  key: option.value,
                  onClick: () => onOptionSelected(option, optionIndex),
                  ...overrideProps,
                };
              },
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }

            return (
              <li
                className={`dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                }`}
                onClick={() => onOptionSelected(option, optionIndex)}
                key={option.value}
              >
                <Text>{option.label}</Text>
                {isSelected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={`1rem`}
                    height={`1rem`}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
