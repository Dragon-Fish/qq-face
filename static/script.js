!(async (window, $) => {
  const $app = $('#app')
  const $container = $app.find('#face-container')
  const face = await $.get('face.json')
  face.forEach(({ QSid, QDes }) => {
    const $img = $('<img>', { class: 'img', src: `assets/s${QSid}.gif` }).on(
      'error',
      function() {
        $(this).replaceWith($('<div>', { class: 'img', text: '?' }))
      }
    )
    const $block = $('<a>', {
      href: `assets/s${QSid}.gif`,
      target: '_blank',
      class: 'face',
    }).append(
      $img,
      $('<div>', { class: 'face-id', text: QSid }),
      $('<div>', { class: 'face-desc', text: QDes })
    )

    $container.append($block)
  })
})(window, jQuery)
