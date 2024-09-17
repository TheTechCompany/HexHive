import { AbilityBuilder, buildMongoQueryMatcher, createMongoAbility } from '@casl/ability'
import { $and, and, $or, or } from '@ucast/mongo2js';
import { DocumentCondition } from '@ucast/core';

const $expr = {
	type: 'document',
	validate(instruction: any, value: any) {
		if (value == null || typeof value !== 'boolean') {
			throw new Error(`"$${instruction.name}" expects to receive a boolean`)
		}
	},
	parse(instruction: any, schema: any) {
		return new DocumentCondition(instruction.name, schema);
	}
};

const expr = (condition: DocumentCondition<any>, object: any) => {
	return condition.value //(object)
};

export const conditionsMatcher = buildMongoQueryMatcher({ $and, $or, $expr }, { and, or, expr });
