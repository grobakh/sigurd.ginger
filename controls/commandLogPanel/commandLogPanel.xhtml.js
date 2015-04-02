define("commandLogPanel/commandLogPanel.xhtml", {}, function () {
    return {
        "templateCss": "commandLogPanel_commandLogPanel",
        "children": [
            {
                "nodeName": "div",
                "props": {
                    "region": "items",
                    "source": {
                        "extensionName": "context",
                        "params": {
                            "path": "recordCollection"
                        }
                    }
                },
                "canChange": {
                    "source": true
                },
                "children": [
                    {
                        "nodeName": "div",
                        "props": {
                            "region": "panel",
                            "context": {
                                "extensionName": "item",
                                "params": {
                                }
                            },
                            "class": {
                                "extensionName": "lambda",
                                "params": {
                                    "p1": {
                                        "extensionName": "context",
                                        "params": {
                                            "path": "isError"
                                        }
                                    },
                                    "result": "p1? 'error' : ''"
                                }
                            }
                        },
                        "canChange": {
                            "context": true,
                            "class": true
                        },
                        "attrs": {
                            "class": "report"
                        },
                        "children": [
                            {
                                "nodeName": "span",
                                "props": {
                                    "region": "label",
                                    "text": {
                                        "extensionName": "context",
                                        "params": {
                                            "path": "targetMessage"
                                        }
                                    }
                                },
                                "canChange": {
                                    "text": true
                                }
                            },
                            {
                                "nodeName": "span",
                                "props": {
                                    "region": "url",
                                    "url": {
                                        "extensionName": "context",
                                        "params": {
                                            "path": "targetUrl"
                                        }
                                    },
                                    "new-window": "true",
                                    "text": {
                                        "extensionName": "context",
                                        "params": {
                                            "path": "targetName"
                                        }
                                    }
                                },
                                "canChange": {
                                    "url": true,
                                    "text": true
                                }
                            },
                            {
                                "nodeName": "span",
                                "props": {
                                    "region": "label",
                                    "text": {
                                        "extensionName": "context",
                                        "params": {
                                            "path": "reasonName"
                                        }
                                    }
                                },
                                "canChange": {
                                    "text": true
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
});