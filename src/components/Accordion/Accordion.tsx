import {
  Accordion as AccordionMui,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { PiMinus, PiPlus } from "react-icons/pi";
import React, { useEffect, useState } from "react";

type Props = {
  summary: string | React.ReactNode;
  expandIcon?: React.ReactNode;
  reduceIcon?: React.ReactNode;
  content: string | React.ReactNode;
  expanded?: boolean;
  id?: string;
  onChange?: () => void;
};

function Accordion({
  summary,
  content,
  expandIcon = <PiPlus />,
  reduceIcon = <PiMinus />,
  expanded,
  id,
  onChange,
}: Props) {
  const [expandedState, setExpanded] = useState<boolean>(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
    if (onChange) {
      onChange();
    }
  };

  useEffect(() => {
    if (typeof expanded !== "undefined") {
      setExpanded(expanded);
    }
  }, [expanded]);

  return (
    <AccordionMui
      id={id}
      className="!bg-black/20 !rounded-md !mb-2 last:!mb-0 !shadow-none"
      expanded={expandedState}
      onChange={handleChange}
      slotProps={{
        heading: {
          component: "h4",
          className: "!font-bold !text-base min-[498px]:!text-lg sm:!text-xl",
        },
        transition: { unmountOnExit: true },
      }}
    >
      <AccordionSummary
        expandIcon={expandedState ? reduceIcon : expandIcon}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails className="!text-sm min-[498px]:!text-base sm:!text-lg !bg-black/30 !rounded-md  !mx-2 !mb-2">
        {content}
      </AccordionDetails>
    </AccordionMui>
  );
}

export default Accordion;
