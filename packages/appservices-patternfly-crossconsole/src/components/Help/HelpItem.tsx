import React, { useContext } from "react";
import { Popover } from "@patternfly/react-core";
import { HelpIcon } from "@patternfly/react-icons";
// import { useTranslation } from "react-i18next";
import { HelpContext } from "./HelpHeader";

type HelpItemProps = {
  helpText: string;
  forLabel: string;
  forID: string;
};

export const HelpItem = ({ helpText, forLabel, forID }: HelpItemProps) => {
  //const { t } = useTranslation();
  const { enabled } = useContext(HelpContext);
  return (
    <>
      {enabled && (
        <Popover bodyContent={"help text"}>
          <button
            aria-label={"Help"}
            onClick={(e) => e.preventDefault()}
            aria-describedby={forID}
            className="pf-c-form__group-label-help"
          >
            <HelpIcon noVerticalAlign />
          </button>
        </Popover>
      )}
    </>
  );
};
