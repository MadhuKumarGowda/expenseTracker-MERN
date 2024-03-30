import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transaction.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;

// Why merge Type definitions?
// Modularity: merging type definitions allows you to keep related schema components in seperate files, promoting
// modularity and organization.

// Easier Collaboration: If mulitple developers are working on different part of the schema, merging seperate type
// definitions can make it easier to collaborate without conflicts

// Reuse: We can reuse type definitions across different parts of the schema, potentially reducing duplication.
// Clear Seperation of Concerns: Each file can focus on a specific domain or type of data, making it easier to
// understand and maintain.
