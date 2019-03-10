// // type: { type: Types.Select, options: ['TypeOne','TypeTwo','TypeThree TypeFour' ], initial: true },
//
// // something: { type: Types.Text, dependsOn: { type: 'TypeThree' }, initial: true },
//
var keystone = require('keystone');
var Types = keystone.Field.Types;
//
/**
 * Page Model
 * ==========
 */

const Page = new keystone.List('Page', {
	map: { name: 'link' },
	autokey: { path: 'slug', from: 'link', unique: true },
});

Page.add({
	link: { type: String, required: true, noedit: true },
	meta_title: { type: String },
	title: { type: String },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	template: { type: Types.Select, options: 'index, content, contacts', default: 'content' },
	content: { type: Types.Html, wysiwyg: true, height: 400, dependsOn: { template: ['content', 'index'] } },
});
//
Page.defaultColumns = 'link, meta_title, state|20%';
Page.register();

