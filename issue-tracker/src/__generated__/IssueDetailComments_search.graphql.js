/**
 * @generated SignedSource<<a8d8b067b01e7e3a0787f519383f2e24>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type IssueDetailComments_search$fragmentType: FragmentType;
type IssueDetailCommentsSearchQuery$variables = any;
export type IssueDetailComments_search$data = {|
  +search: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
    |}>,
  |},
  +$fragmentType: IssueDetailComments_search$fragmentType,
|};
export type IssueDetailComments_search$key = {
  +$data?: IssueDetailComments_search$data,
  +$fragmentSpreads: IssueDetailComments_search$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = [
  "search"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./IssueDetailCommentsSearchQuery.graphql')
    }
  },
  "name": "IssueDetailComments_search",
  "selections": [
    {
      "alias": "search",
      "args": [
        {
          "kind": "Literal",
          "name": "query",
          "value": "relay"
        },
        {
          "kind": "Literal",
          "name": "type",
          "value": "REPOSITORY"
        }
      ],
      "concreteType": "SearchResultItemConnection",
      "kind": "LinkedField",
      "name": "__IssueDetailComments_search_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SearchResultItemEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__id",
                  "storageKey": null
                }
              ]
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__IssueDetailComments_search_connection(query:\"relay\",type:\"REPOSITORY\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node/*: any*/).hash = "b88a3b7ff4e95482f09fde8b5ba2aec5";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  IssueDetailComments_search$fragmentType,
  IssueDetailComments_search$data,
  IssueDetailCommentsSearchQuery$variables,
>*/);
