module.exports = {
  mainSideBar: {
    "Project Information": ["project/introduction", "project/about", "project/terminology", "project/community_standards"],
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
  communitySidebar: [
    {
      "collapsed": false,
      "type": "category",
      "label": "Project Information",
      "items": [
        {
          "type": "doc",
          "id": "version-1.0/project/introduction"
        },
        {
          "type": "doc",
          "id": "version-1.0/project/about"
        },
        {
          "type": "doc",
          "id": "version-1.0/project/terminology"
        },
        {
          "type": "doc",
          "id": "version-1.0/project/community_standards"
        }
      ]
    },
    {
      "collapsed": true,
      "type": "category",
      "label": "Community Guides for v1.0",
      "items": [
        {
          "type": "doc",
          "id": "version-1.0/community/cg_about"
        },
        {
          "collapsed": true,
          "type": "category",
          "label": "Panel",
          "items": [
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/panel/cg_pl_centos7"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/panel/cg_pl_centos8"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/panel/cg_pl_debian9"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/panel/cg_pl_debian10"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/panel/cg_pl_ubuntu1804"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/panel/cg_pl_ubuntu2004"
            }
          ]
        },
        {
          "collapsed": true,
          "type": "category",
          "label": "Daemon",
          "items": [
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/daemon/cg_da_centos7"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/daemon/cg_da_centos8"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/daemon/cg_da_debian9"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/daemon/cg_da_debian10"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/daemon/cg_da_ubuntu1804"
            },
            {
              "type": "doc",
              "id": "version-1.0/community/installation-guides/daemon/cg_da_ubuntu2004"
            }
          ]
        }
      ]
    }
  ]
};
