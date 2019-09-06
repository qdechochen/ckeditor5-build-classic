/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

import MathType from '@wiris/mathtype-ckeditor5';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageResize,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment,
	Font,
	Mention,
	RemoveFormat,
	Highlight,
	Autosave,
	TextTransformation,
	Indent,
	IndentBlock,
	TodoList,

	MathType,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'removeFormat',
			'|',
			'heading',
			'fontFamily',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'subscript',
			'superscript',
			'alignment',
			'link',
			'|',
			'outdent',
			'indent',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'imageUpload',
			'mediaEmbed',
			'blockQuote',
			'insertTable',
			'|',
			'MathType',
			'ChemType',
		],
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative',
		],
		styles: ['full', 'alignLeft', 'alignRight', 'alignCenter'],
		resizeUnit: 'px',
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'zh-cn',
	fontFamily: {
		options: [
			'default',
			'Arial, sans-serif',
			'Courier New, Courier, monospace',
		],
	},
	fontSize: {
		options: [12, 14, 'default', 20, 24, 28, 40, 78],
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black',
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey',
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey',
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey',
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true,
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red',
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange',
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow',
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green',
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green',
			},
		],
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red',
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange',
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow',
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green',
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green',
			},
		],
	},
	mediaEmbed: {},
	alignment: {
		options: ['left', 'right', 'center', 'justify'],
	},
	typing: {
		transformations: {
			extra: [
				// Add some custom transformations – e.g. for emojis.
				{ from: ':)', to: '🙂' },
				{ from: ':+1:', to: '👍' },
				{ from: ':tada:', to: '🎉' },
			],
		},
	},
	indentBlock: {
		offset: 1,
		unit: 'em',
	},
	link: {
		decorators: {
			addTargetToLinks: {
				mode: 'manual',
				label: 'Open in a new tab',
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer',
				},
			},
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file',
				},
			},
		},
	},
};
