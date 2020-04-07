/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './editor';
import defaultSave, { save } from './save';
import icon from './icon';

const attributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: 'p',
		default: '',
	},
	checked: {
		type: 'boolean',
	},
	assignedTo: {
		type: 'string',
	},
	placeholder: {
		type: 'string',
	},
	status: {
		type: 'string',
		default: 'new',
	},
	dueDate: {
		type: 'string',
		default: '',
	},
	startDate: {
		type: 'string',
		default: '',
	},
};

export function registerBlock() {
	registerBlockType( 'a8c/task', {
		title: __( 'Task' ),
		description: __( 'Create task items and check them when completed.' ),
		icon,
		category: 'a8c',
		keywords: [ __( 'todo' ), __( 'task' ) ],
		supports: {
			className: false,
			anchor: true,
		},
		attributes,
		deprecated: [
			{
				attributes: {
					...attributes,
					content: {
						type: 'string',
						source: 'html',
						selector: 'p',
						default: '',
					},
				},
				migrate: a => a,
				save: save( 'p' ),
			},
		],
		edit,
		save: defaultSave,
	} );
}

registerBlock();
