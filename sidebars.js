module.exports = {
  someSidebar: {
    "Project Information": [
      "project/introduction",
      "project/about",
      "project/terminology",
      "project/community_standards",
    ],
    Panel: [
      {
        collapsed: true,
        type: "category",
        label: "Panel 0.7 ( Current )",
        items: [
          {
            type: "doc",
            id: "version-0.7/panel/getting_started",
          },
          {
            type: "doc",
            id: "version-0.7/panel/webserver_configuration",
          },
        ],
      },
      {
        collapsed: true,
        type: "category",
        label: "Panel 1.0 ( Beta )",
        items: [
          {
            type: "doc",
            id: "version-1.0/panel/getting_started",
          },
          {
            type: "doc",
            id: "version-1.0/panel/webserver_configuration",
          },
        ],
      },
    ],
    Daemon: [
      {
        collapsed: true,
        type: "category",
        label: "Daemon 0.6 ( Current )",
        items: [
          {
            type: "doc",
            id: "version-0.7/daemon/installing",
          },
        ],
      },
      {
        collapsed: true,
        type: "category",
        label: "Wings 1.0 ( Beta )",
        items: [
          {
            type: "doc",
            id: "version-1.0/wings/install_wings",
          },
          {
            type: "doc",
            id: "version-1.0/wings/upgrade_wings",
          },
        ],
      },
    ],
  },
};
