import x from "./function-basket/x"
import open from "./function-basket/open"
import snake from "just-snake-case"

let {entries: getEntries} = Object

let transformKey = snake

let transformValue = value => {
	if (value === true) {
		return "yes"
	}

	if (value === false) {
		return "no"
	}

	// let files be passed as buffer ÿ not
	if (Buffer.isBuffer(value)) {
		return value.toString("base64")
	}

	return value
}

export let transformOptions = options =>
	getEntries(options)
		.reduce((options, [key, value]) => {
			if (key.match(/^[$_]/)) return options
			options[transformKey(key)] = transformValue(value)
			return options
		}, {})

/**
 * @typedef {Object} OpenNoteParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [title] note title.
 * @property {string} [header] a header inside the note.
 * @property {string} [exclude_trashed] if yes exclude trashed notes.
 * @property {string} [new_window] if yes open the note in an external window (MacOS only).
 * @property {string} [float] if yes makes the external window float on top (MacOS only).
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 * @property {string} [edit] if yes place the cursor inside the note editor.
 */
/**
 * # /open-note
 * Open a note identified by its title or id and return its content.
 * @param {OpenNoteParameters} options
 */
export let openNote = options =>
	open(x.bear.openNote(options))

openNote.description = "Open a note identified by its title or id and return its content."
/**
 * @typedef {Object} CreateParameters
 * @property {string} [title] note title.
 * @property {string} [text] note body.
 * @property {string} [tags] a comma separated list of tags.
 * @property {string} [file] base64 representation of a file.
 * @property {string} [filename] file name with extension. Both file and filename are required to successfully add a file.
 * @property {string} [open_note] if no do not display the new note in Bear's main or external window.
 * @property {string} [new_window] if yes open the note in an external window (MacOS only).
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 * @property {string} [pin] if yes pin the note to the top of the list.
 * @property {string} [edit] if yes place the cursor inside the note editor.
 * @property {string} [timestamp] if yes prepend the current date and time to the text
 */
/**
 * # /create
 * Create a new note and return its unique identifier.
 * Empty notes are not allowed.
 * @param {CreateParameters} options 
 */
export let create = options =>
	open(x.bear.create(options))

create.description = "Empty notes are not allowed."
/**
 * @typedef {Object} AddTextParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [title] title of the note.
 * @property {string} text text to add.
 * @property {string} [header] if specified add the text to the corresponding header inside the note.
 * @property {string} [mode] the allowed values are prepend, append, replace_all and replace (keep the note's title untouched).
 * @property {string} [tags] a comma separated list of tags.
 * @property {string} [exclude_trashed] if yes exclude trashed notes.
 * @property {string} [open_note] if no do not display the new note in Bear's main or external window.
 * @property {string} [new_window] if yes open the note in an external window (MacOS only).
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 * @property {string} [edit] if yes place the cursor inside the note editor.
 * @property {string} [timestamp] if yes prepend the current date and time to the text
 */
/**
 * # /add-text
 * Append or prepend text to a note identified by its title or id.
 * @param {AddTextParameters} options
 */
export let addText = options =>
	open(x.bear.addText(options))

addText.description = "Append or prepend text to a note identified by its title or id."
/**
 * @typedef {Object} AddFileParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [title] note title.
 * @property {string} file base64 representation of a file.
 * @property {string} [header] if specified add the file to the corresponding header inside the note.
 * @property {string} filename file name with extension. Both file and filename are required to successfully add a file.
 * @property {string} [mode] the allowed values are prepend, append, replace_all and replace (keep the note's title untouched).
 * @property {string} [open_note] if no do not display the new note in Bear's main or external window.
 * @property {string} [new_window] if yes open the note in an external window (MacOS only).
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 * @property {string} [edit] if yes place the cursor inside the note editor.
 */
/**
 * # /add-file
 * Append or prepend a file to a note identified by its title or id.
 * @param {AddFileParameters} options
 */
export let addFile = options =>
	open(x.bear.addFile(options))

addFile.description = "Append or prepend a file to a note identified by its title or id."
/**
 * @typedef {Object} TagsParameters
 * @property {string} token application token.
 */
/**
 * # /tags
 * Return all the tags currently displayed in Bear's sidebar.
 * @param {TagsParameters} options
 */
export let tags = options =>
	open(x.bear.tags(options))

tags.description = "Return all the tags currently displayed in Bear's sidebar."
/**
 * @typedef {Object} OpenTagParameters
 * @property {string} name tag name.
 * @property {string} [token] application token.
 */
/**
 * # /open-tag
 * Show all the notes which have a selected tag in bear.
 * @param {OpenTagParameters} options
 */
export let openTag = options =>
	open(x.bear.openTag(options))

openTag.description = "Show all the notes which have a selected tag in bear."
/**
 * @typedef {Object} RenameTagParameters
 * @property {string} name tag name.
 * @property {string} new_name new tag name.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /rename-tag
 * Rename an existing tag.
 * @param {RenameTagParameters} options
 */
export let renameTag = options =>
	open(x.bear.renameTag(options))

renameTag.description = "Rename an existing tag."
/**
 * @typedef {Object} DeleteTagParameters
 * @property {string} name tag name.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /delete-tag
 * Delete an existing tag.
 * @param {DeleteTagParameters} options
 */
export let deleteTag = options =>
	open(x.bear.deleteTag(options))

deleteTag.description = "Delete an existing tag."
/**
 * @typedef {Object} TrashParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [search] string to search.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /trash
 * Move a note to bear trash and select the Trash sidebar item.
 * @param {TrashParameters} options
 */
export let trash = options =>
	open(x.bear.trash(options))

trash.description = "Move a note to bear trash and select the Trash sidebar item."
/**
 * @typedef {Object} ArchiveParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [search] string to search.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /archive
 * Move a note to bear archive and select the Archive sidebar item.
 * @param {ArchiveParameters} options
 */
export let archive = options =>
	open(x.bear.archive(options))

archive.description = "Move a note to bear archive and select the Archive sidebar item."
/**
 * @typedef {Object} UntaggedParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [search] string to search.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /untagged
 * Select the Untagged sidebar item.
 * @param {UntaggedParameters} options
 */
export let untagged = options =>
	open(x.bear.untagged(options))

untagged.description = "Select the Untagged sidebar item."
/**
 * @typedef {Object} TodoParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [search] string to search.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /todo
 * Select the Todo sidebar item.
 * @param {TodoParameters} options
 */
export let todo = options =>
	open(x.bear.todo(options))

todo.description = "Select the Todo sidebar item."
/**
 * @typedef {Object} TodayParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [search] string to search.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /today
 * Select the Today sidebar item.
 * @param {TodayParameters} options
 */
export let today = options =>
	open(x.bear.today(options))

today.description = "Select the Today sidebar item."
/**
 * @typedef {Object} SearchParameters
 * @property {string} [term] string to search.
 * @property {string} [tag] tag to search into.
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 * @property {string} [token] application token.
 */
/**
 * # /search
 * Show search results in Bear for all notes or for a specific tag.
 * @param {SearchParameters} options
 */
export let search = options =>
	open(x.bear.search(options))

search.description = "Show search results in Bear for all notes or for a specific tag."
/**
 * @typedef {Object} GrabUrlParameters
 * @property {string} url url to grab.
 * @property {string} [images] grab or not the page images.
 * @property {string} [tags] a comma separated list of tags.
 * @property {string} [pin] if yes pin the note to the top of the list.
 * @property {string} [wait] if no x-success is immediately called without identifier and title.
 */
/**
 * # /grab-url
 * Create a new note with the content of a web page.
 * @param {GrabUrlParameters} options
 */
export let grabUrl = options =>
	open(x.bear.grabUrl(options))

grabUrl.description = "Create a new note with the content of a web page."
/**
 * @typedef {Object} ChangeThemeParameters
 * @property {"Red Graphite"|"Charcoal"|"Solarized Light"|"Solarized Dark"|"Panic Mode"|"Dracula"|"Gotham"|"Toothpaste"|"Cobalt"|"Duotone Light"|"Duotone Snow"|"Dieci"|"Ayu"|"Dark Graphite"|"Duotone Heat"} theme the theme
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /change-theme
 * Change the selected Bear theme. Some themes may require a Bear Pro subscription.
 * @param {ChangeThemeParameters} options
 */
export let changeTheme = options =>
	open(x.bear.changeTheme(options))

changeTheme.description = "Change the selected Bear theme. Some themes may require a Bear Pro subscription."
/**
 * @typedef {Object} ChangeFontParameters
 * @property {"Avenir Next"|"System"|"Helvetica Neue"|"Menlo"|"Georgia"|"Courier"|"Open Dyslexic"} font required
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 */
/**
 * # /change-font
 * Change the selected Bear Font.
 * @param {ChangeFontParameters} options
 */
export let changeFont = options =>
	open(x.bear.changeFont(options))

changeFont.description = "Change the selected Bear Font."
