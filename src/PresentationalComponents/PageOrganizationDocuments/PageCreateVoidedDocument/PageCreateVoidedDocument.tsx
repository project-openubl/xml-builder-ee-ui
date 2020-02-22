import React from "react";
import { TabsDocument } from "@projectopenubl/xml-builder-react";
import { XmlBuilderRouterProps } from "../../../models/routerProps";
import DocumentCreate from "../../../SmartComponents/DocumentCreate";
import { handleDocumentTabRedirect } from "../Utils";

interface Props extends XmlBuilderRouterProps {}

interface State {}

export class PageCreateVoidedDocument extends React.Component<Props, State> {
  handleOnTabSelect = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string
  ): void => {
    const { history, match } = this.props;
    handleDocumentTabRedirect(history, match, eventKey);
  };

  render() {
    const organizationId = this.props.match.params.organizationId;

    return (
      <React.Fragment>
        <TabsDocument activeKey={1} onTabSelect={this.handleOnTabSelect}>
          <DocumentCreate
            organizationId={organizationId}
            formType="voided-document"
          />
        </TabsDocument>
      </React.Fragment>
    );
  }
}
