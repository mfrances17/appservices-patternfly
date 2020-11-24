import React, { ReactElement } from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';
import { BarsIcon } from '@patternfly/react-icons';
import {ExternalLink} from '../ExternalLink';
// import { Button, ButtonVariant, ButtonProps, PageHeaderProps, PageContextConsumer } from '@patternfly/react-core';
import {
  Text,
  PageSection,
  TextContent,
  Divider,
  Level,
  LevelItem,
  // existing prop
  PageHeaderProps,
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
// import { CrossNavApp, CrossNavAppState, getAppNavState, setAppNavState, navigateToApp } from '@rh-uxd/appservices-patternfly-core';
// import { CrossNavContextSelector, CrossNavContextSelectorItem } from '../CrossNavContextSelector';

export interface CrossNavHeaderProps extends PageHeaderProps {
  /** Application data for applications shown in the cross console navigation.  Note if a protocol is not specified to use when navigating for an app, it will default to https*/
  // apps: CrossNavApp[] | null;
  // currentApp: CrossNavApp | null;
  // onAppNavigate?: (app: CrossNavApp) => void;

  // props added from ViewHeader
  titleKey: string;
  badge?: string;
  subKey: string;
  subKeyLinkProps?: ButtonProps;
  dropdownItems?: ReactElement[];
  lowerDropdownItems?: any;
  lowerDropdownMenuTitle?: any;
}

interface CrossNavHeaderState {
  readonly isOpen: boolean;
  // readonly initalLoad: boolean;

  // state added from ViewHeader
  isEnabled?: boolean;
  onToggle?: (value: boolean) => void;
}

export class CrossNavHeader extends React.Component<CrossNavHeaderProps, CrossNavHeaderState> {
  
  constructor(props: CrossNavHeaderProps) {
    super(props);
    this.state = {
      isOpen: false,
      // initalLoad: true
    }
  }
  /** 
   * Writes last known URL and state data for a user of a specific app to local storage.
   * 
   * @param appId - Uniquie identifer for application
   * @param userId - Uniquie identifer for the user.  Defaults to no user.
   * @param appState - Object containing the current state of the application.
   */
  // static setAppNavState(appId: string, userId: string = '', appState: CrossNavAppState) {
  //   setAppNavState(appId, userId, appState);
  // }

  /**
   * Retrieves the last known URL and state date for the user of the specified app.
   * 
   * @param appId - Uniquie identifer for application
   * @param userId - Uniquie identifer for the user.  Defaults to no user.
   * 
   * @returns Saved application state retrieved from local storage.
   */
  //  static getAppNavState(appId: string, userId: string = ''): CrossNavAppState {
  //    return getAppNavState(appId, userId);
  // }

  private onToggle = (event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  // private onSelect = (event: any, app: CrossNavApp) => {
  //   if (this.props.onAppNavigate) {
  //     this.props.onAppNavigate(app);
  //   }
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  //   navigateToApp(this.props.currentApp, app);
  // }

  render() {

    const { 
      // apps = null,
      // currentApp,
      className = '',
      logo = null as React.ReactNode,
      logoProps = null as object,
      logoComponent = 'a',
      headerTools = null as React.ReactNode,
      topNav = null as React.ReactNode,
      isNavOpen = true,
      showNavToggle = false,
      onNavToggle = () => undefined as any,
      'aria-label': ariaLabel = 'Global navigation',
      ...props } = this.props;

    const LogoComponent = logoComponent as any;

    const { isOpen } = this.state;

      return (
        <>
          <PageSection variant="light">
            <Level hasGutter>
              <LevelItem>
                <Level>
                  <LevelItem>
                    <TextContent className="pf-u-mr-sm">
                      <Text component="h1">{props.titleKey}</Text>
                      {/* <Text component="h1">H1 Header</Text> */}
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
              {/* <LevelItem>
                <Toolbar>
                  <ToolbarContent>
                    {props.onToggle && (
                      <ToolbarItem>
                        <Switch
                          id={`${props.titleKey}-switch`}
                          label={"Enabled"}
                          labelOff={("Disabled")}
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
                              {"Action"}
                            </DropdownToggle>
                          }
                          isOpen={isDropdownOpen}
                          dropdownItems={props.dropdownItems}
                        />
                      </ToolbarItem>
                    )}
                  </ToolbarContent>
                </Toolbar>
              </LevelItem> */}
            </Level>
              <TextContent>
                {/* <Text>HELLO</Text> */}
                <Text>
                  {props.subKey}
                  {props.subKeyLinkProps && (
                    <ExternalLink
                      {...props.subKeyLinkProps}
                      isInline
                      className="pf-u-ml-md"
                    />
                  )}
                </Text>
              </TextContent>
            {/* {props.lowerDropdownItems && (
              <Dropdown
                className="keycloak__user-federation__dropdown"
                toggle={
                  <DropdownToggle
                    onToggle={() => onLowerDropdownToggle()}
                    isPrimary
                    id="ufToggleId"
                  >
                    {props.lowerDropdownMenuTitle}
                  </DropdownToggle>
                }
                isOpen={isLowerDropdownOpen}
                dropdownItems={props.lowerDropdownItems}
              />
            )} */}
          </PageSection>
          <Divider />
        </>
      );
  }
};