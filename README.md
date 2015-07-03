## jquery-icheck
jQuery icheck is an interactive checkbox with a better UI and UX. jQuery-iCheck converts a checkbox into a switch/button where the on/off values are customizable.

### Usage
---

First include jquery in the `<head>` section of your HTML template/page.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```
Then include jQuery-iCheck's `js` and `css` file in the HTML
```
<script src="jquery-icheck/js/jquery.icheck.js"></script>
<link rel="stylesheet" href="jquery-icheck/css/jquery.icheck.css" />
```
Finally to initialize icheck on a checkbox just use the `icheck` method.
```
<input type="checkbox" id="sample-checkbox" />
$('#sample-checkbox').icheck();
```

### Options
---

As icheck is a lightweight and a very basic plugin there are only two options available at the moment that let's you change the text for the checkbox on `checked` and `unchecked` state respectively.

 - checkedText: (string) This string will be used as the selected value when the checkbox is in a checked state
 - uncheckedText: (string) This string will be used as the selected value when the checkbox is in an unchecked state


To override the defaults you'd need to pass in the custom options as an object while calling the icheck method. Following is an example.
```
<input type="checkbox" id="sample-checkbox" />
$('#sample-checkbox').icheck({
    uncheckedText: "No",
    checkedText: "Yes"
});
```

### Contributors
---

Amyth Singh (<mail@amythsingh.com>)
