define("headerBlock/headerBlock.xhtml", {}, function () {
    return {
        "templateCss": "headerBlock_headerBlock",
        "children": [
            {
                "nodeName": "div",
                "attrs": {
                    "class": "header"
                },
                "children": [
                    {
                        "nodeName": "div",
                        "attrs": {
                            "class": "right"
                        },
                        "children": [
                            {
                                "nodeName": "span",
                                "props": {
                                    "region": "url",
                                    "url": "/items",
                                    "text": {
                                        "extensionName": "context",
                                        "params": {
                                            "path": "loginName"
                                        }
                                    },
                                    "id": "header.login"
                                },
                                "attrs": {
                                    "class": "headerButton login"
                                },
                                "canChange": {
                                    "text": true
                                }
                            },
                            {
                                "nodeName": "span",
                                "props": {
                                    "region": "url",
                                    "url": "/logout",
                                    "text": {
                                        "extensionName": "token",
                                        "params": {
                                            "path": "commonActions.exit"
                                        }
                                    },
                                    "id": "header.login"
                                },
                                "attrs": {
                                    "class": "headerButton exit"
                                },
                                "canChange": {
                                    "text": true
                                }
                            },
                            {
                                "nodeName": "div",
                                "props": {
                                    "region": "label",
                                    "text": {
                                        "extensionName": "context",
                                        "params": {
                                            "path": "version"
                                        }
                                    }
                                },
                                "canChange": {
                                    "text": true
                                },
                                "attrs": {
                                    "class": "version"
                                }
                            }
                        ]
                    },
                    {
                        "nodeName": "div",
                        "props": {
                            "id": "urls"
                        },
                        "attrs": {
                            "class": "navigation"
                        }
                    }
                ]
            }
        ]
    }
});