export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'company',
      type: 'string',
    },
    {
      name: 'imgurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
