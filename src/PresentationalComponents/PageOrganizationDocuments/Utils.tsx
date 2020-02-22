export const handleDocumentTabRedirect = (
  history: any,
  match: any,
  eventKey: number | string
): void => {
  const organizationId = match.params.organizationId;
  const url = `/organizations/manage/${organizationId}/documents/create`;
  if (eventKey === 0) {
    history.push(url + "/standard-document");
  } else if (eventKey === 1) {
    history.push(url + "/voided-document");
  } else if (eventKey === 2) {
    history.push(url + "/summary-document");
  }
};
