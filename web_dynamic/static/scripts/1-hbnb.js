$(document).ready(() => {
  const amenities = {}

  $('input[type="checkbox"]').change(function () {
      if (this.checked) {
          amenities[$(this).data("id")] = $(this).data("name")
      } else {
          delete amenities[$(this).data("id")]
      }

      const amenitiesList = Object.values(amenities).join(", ")
      $(".amenities h4").text(amenitiesList || "\u00A0")
  })
})
