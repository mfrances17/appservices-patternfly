import React, { ReactElement, useContext, useState } from "react";
import {
  Text,
  PageSection,
  TextContent,
  Divider,
  Level,
  LevelItem,
  Switch,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Badge,
  ButtonProps,
  Dropdown,
  DropdownToggle,
  DropdownPosition,
} from "@patternfly/react-core";
import { HelpContext } from "./components/help-enabler/HelpHeader"
import { ExternalLink } from "./components/external-link/ExternalLink";
import { useTranslation } from "react-i18next";

export interface ViewHeaderProps {
  titleKey: string;
  badge?: string;
  subKey: string;
  subKeyLinkProps?: ButtonProps;
  dropdownItems?: ReactElement[];
  lowerDropdownItems?: any;
  lowerDropdownMenuTitle?: any;
  isEnabled?: boolean;
  onToggle?: (value: boolean) => void;
};

export const ViewHeader: React.FunctionComponent<ViewHeaderProps> = (props) => { 
  const { t } = useTranslation();
  const { enabled } = useContext(HelpContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLowerDropdownOpen, setIsLowerDropdownOpen] = useState(false);

  const onDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const onLowerDropdownToggle = () => {
    setIsLowerDropdownOpen(!isLowerDropdownOpen);
  };

  return (
    <>
      <PageSection variant="light">
        <Level hasGutter>
          <LevelItem>
            <Level>
              <LevelItem>
                <TextContent className="pf-u-mr-sm">
                  <Text component="h1">{t(props.titleKey)}</Text>
                </TextContent>
              </LevelItem>
              {props.badge && (
                <LevelItem>
                  <Badge>{props.badge}</Badge>
                </LevelItem>
              )}
            </Level>
          </LevelItem>
          <LevelItem></LevelItem>
          <LevelItem>
            <Toolbar>
              <ToolbarContent>
                {props.onToggle && (
                  <ToolbarItem>
                    <Switch
                      id={`${props.titleKey}-switch`}
                      label={t("common:enabled")}
                      labelOff={t("common:disabled")}
                      className="pf-u-mr-lg"
                      isChecked={props.isEnabled}
                      onChange={(value) => {
                        if (props.onToggle) {
                          props.onToggle(value);
                        }
                      }}
                    />
                  </ToolbarItem>
                )}
                {props.dropdownItems && (
                  <ToolbarItem>
                    <Dropdown
                      position={DropdownPosition.right}
                      toggle={
                        <DropdownToggle onToggle={onDropdownToggle}>
                          {t("common:action")}
                        </DropdownToggle>
                      }
                      isOpen={isDropdownOpen}
                      dropdownItems={props.dropdownItems}
                    />
                  </ToolbarItem>
                )}
              </ToolbarContent>
            </Toolbar>
          </LevelItem>
        </Level>
        {enabled && (
          <TextContent>
            <Text>
              {t(props.subKey)}
              {props.subKeyLinkProps && (
                <ExternalLink
                  {...props.subKeyLinkProps}
                  isInline
                  className="pf-u-ml-md"
                />
              )}
            </Text>
          </TextContent>
        )}
        {props.lowerDropdownItems && (
          <Dropdown
            className="keycloak__user-federation__dropdown"
            toggle={
              <DropdownToggle
                onToggle={() => onLowerDropdownToggle()}
                isPrimary
                id="ufToggleId"
              >
                {t(props.lowerDropdownMenuTitle)}
              </DropdownToggle>
            }
            isOpen={isLowerDropdownOpen}
            dropdownItems={props.lowerDropdownItems}
          />
        )}
      </PageSection>
      <Divider />
    </>
  );
};
