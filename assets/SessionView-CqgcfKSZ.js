const t=new RegExp(String.raw`[\u0000-\u001f\u007f-\u009f\u061c\u180e\u200b-\u200f\u202a-\u202e\u2060-\u206f\ufeff]`,"gu");function u(e){return e.normalize("NFC").replace(t," ").replace(/\s+/gu," ").trim()}function i(e){return e?e.customTitle??e.title??"Untitled":"Untitled"}export{i as g,u as s};
//# sourceMappingURL=SessionView-CqgcfKSZ.js.map
