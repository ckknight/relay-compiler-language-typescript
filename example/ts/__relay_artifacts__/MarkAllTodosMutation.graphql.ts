/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MarkAllTodosMutationVariables = {
    readonly input: {
        readonly complete: boolean;
        readonly clientMutationId?: string | null;
    };
};
export type MarkAllTodosMutationResponse = {
    readonly markAllTodos: ({
        readonly changedTodos: ReadonlyArray<({
                readonly id: string;
                readonly complete: boolean | null;
            }) | null> | null;
        readonly viewer: ({
            readonly id: string;
            readonly completedCount: number | null;
        }) | null;
    }) | null;
};



/*
mutation MarkAllTodosMutation(
  $input: MarkAllTodosInput!
) {
  markAllTodos(input: $input) {
    changedTodos {
      id
      complete
    }
    viewer {
      id
      completedCount
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "MarkAllTodosInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "markAllTodos",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "MarkAllTodosInput!"
      }
    ],
    "concreteType": "MarkAllTodosPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "changedTodos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "complete",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "completedCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "MarkAllTodosMutation",
  "id": null,
  "text": "mutation MarkAllTodosMutation(\n  $input: MarkAllTodosInput!\n) {\n  markAllTodos(input: $input) {\n    changedTodos {\n      id\n      complete\n    }\n    viewer {\n      id\n      completedCount\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MarkAllTodosMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "MarkAllTodosMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node as any).hash = '00fd81d60a24546c792660837e3fc6bd';
export default node;
