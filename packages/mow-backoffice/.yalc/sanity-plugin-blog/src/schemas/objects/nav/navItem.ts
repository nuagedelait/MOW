import { UlistIcon } from '@sanity/icons'
import { actions } from '../../constants';

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: UlistIcon,
  fields: [
    {
      name: "text",
      type: "string",
      title: "Navigation Text"
    },
    {
      name: "navigationItemUrl",
      type: "link",
      title: "Navigation Item URL"
    },
    {
      name: "action",
      type: "string",
      title: "Action",
      options: {
        list: actions
      }
    },
    /*
    {
      title: 'Icon',
      name: 'icon',
      type: 'iconpicker'
    },*/
  ]
}