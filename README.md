# bear.app

The documentation for the `x-callback-url` is available at: 
https://bear.app/faq/X-callback-url%20Scheme%20documentation/

`--file` arguments get read and turned into base64 strings

```
Commands:
  bear.app open-note     Open a note identified by its title or id and return
                         its content.
  bear.app create        Empty notes are not allowed.
  bear.app add-text      Append or prepend text to a note identified by its
                         title or id.
  bear.app add-file      Append or prepend a file to a note identified by its
                         title or id.
  bear.app tags          Return all the tags currently displayed in Bear's
                         sidebar.
  bear.app open-tag      Show all the notes which have a selected tag in bear.
  bear.app rename-tag    Rename an existing tag.
  bear.app delete-tag    Delete an existing tag.
  bear.app trash         Move a note to bear trash and select the Trash sidebar
                         item.
  bear.app archive       Move a note to bear archive and select the Archive
                         sidebar item.
  bear.app untagged      Select the Untagged sidebar item.
  bear.app todo          Select the Todo sidebar item.
  bear.app today         Select the Today sidebar item.
  bear.app search        Show search results in Bear for all notes or for a
                         specific tag.
  bear.app grab-url      Create a new note with the content of a web page.
  bear.app change-theme  Change the selected Bear theme. Some themes may require
                         a Bear Pro subscription.
  bear.app change-font   Change the selected Bear Font.
```
