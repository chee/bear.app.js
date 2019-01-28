import x from "./function-basket/x"
import open from "./function-basket/open"

/**
 * @typedef {Object} OpenNoteParameters
 * @property {string} [id] note unique identifier.
 * @property {string} [title] note title.
 * @property {string} [header] an header inside the note.
 * @property {string} [exclude_trashed] if yes exclude trashed notes.
 * @property {string} [new_window] if yes open the note in an external window (MacOS only).
 * @property {string} [float] if yes makes the external window float on top (MacOS only).
 * @property {string} [show_window] if no the call don't force the opening of bear main window (MacOS only).
 * @property {string} [edit] if yes place the cursor inside the note editor.
 */

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
 * # /open-note
 * Open a note identified by its title or id and return its content.
 * @param {OpenNoteParameters} options
 */
export let openNote = options =>
	open(x.bear.openNote(options))

/**
 * # /create
 * Create a new note and return its unique identifier.
 * Empty notes are not allowed.
 * @param {CreateParameters} options 
 */
export let create = options =>
	open(x.bear.create(options))

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