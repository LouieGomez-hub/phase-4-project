puts "Seeding database..."

# # CREATE USERS
# User.create(username: "Louie", password: "tripbookerproj4")

# 20.times do
#   User.create(username: Faker::Name.first_name, password: "password")
# end

# # CREATE TRIPS
# hotels = [
#    "https://www.travelandleisure.com/thmb/WVhIDu18EwPxBLiubkWJxrauib0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hotel-madame-reve-09_100HTLSWB22-fe15cf6eda9e4589be3044d47bf43acc.jpg"
#    "https://www.travelandleisure.com/thmb/0OmNizMk3ux-cmF72QIi0L6EA3c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shangri-la-the-shard-london-23_100HTLSWB22-8295ca3b26db49e89f637398ec3cfa8a.jpg"}
#    "https://www.travelandleisure.com/thmb/t8OH0Q78X_b-R6lUT4Sno6XYflg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-standard-hua-hin-35_100HTLSWB22-930ac3790f254f3ab66dd0e316b2e3ca.jpg"}
#    "https://www.travelandleisure.com/thmb/BFwiofLMfenGheE1dOv4s9ggka0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/four-seasons-kyoto-japan-63-swap-WRLDHOTELSWB22-dd370e483719433cb789de5d9efa8692.jpg"}
#    "https://www.travelandleisure.com/thmb/qyWXRIyaLARAd4hSG13f1b0rYU8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/royal-mansour-marrakech-06_100HTLSWB22-2206f8ec4da347839268b23fb8df658e.jpg"}
#    "https://www.travelandleisure.com/thmb/pUaus5q_Rhb3XtIb4nTAVwxbG7I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wilderness-safaris-bisate-lodge-14_100HTLSWB22-673cc92077e445cf88f095a7521e3fa8.jpg"}
#    "https://www.travelandleisure.com/thmb/IaEHcWVs7pVM2QJWFeuyxv7-bqo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/waldorf-astoria-los-cabos-pedregal-32_100HTLSWB22-f3e4793e8ec144928c2d3e0f5731372e.jpg"}
#    "https://www.travelandleisure.com/thmb/nQO3UlIrQoUv5OY5YMZIyyDNRlg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/canaves-oia-epitome-34_100HTLSWB22-4f44cca1e09d4b34a5fa0c11e4286705.jpg"}
#    "https://www.travelandleisure.com/thmb/2atg5ByzZ1g3csd9izjEnhJTdM0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-oberoi-amarvilas-36_100HTLSWB22-828fd735c0454fc4b7369602e87bed11.jpg"}
#    "https://www.travelandleisure.com/thmb/8bY0DrqlJcMHt3FMDZB1eGoCWoA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hotel-de-la-ville-41_100HTLSWB22-c01abbf870894ad7bf7d5f1ed2c2b0c4.jpg"}
#    "https://www.travelandleisure.com/thmb/-mxCBLczj3HvNG_RrhZb4BfrMls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/il-san-pietro-di-positano-42_100HTLSWB22-45247f4877684f4d89ab569e9bb39ad3.jpg"}
#    "https://www.travelandleisure.com/thmb/P6y3qWGK33H1Qy5DdNB2xUVN_8E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/alila-villas-uluwatu-49_100HTLSWB22-a04c4af7783c46328a0c8d3505449e97.jpg"}
#    "https://www.travelandleisure.com/thmb/qfiJeYuasjt_7Fijqyvy_uiWEjw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Tnayara-springs-54_100HTLSWB22-aab58dc839524649838466da7c069ca9.jpg"}
#    "https://www.travelandleisure.com/thmb/5mKpKgJmjbAsQgHapJ6bxLZWmdk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/namale-resort-and-spa-59_100HTLSWB22-af81b3e0870c42a49507301b965e5366.jpg"}
#    "https://www.travelandleisure.com/thmb/93JHoss-83TVPpJfElFyzoAtyCY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hotel-savoy-68_100HTLSWB22-46016045ed86473fbd900630a4a28d85.jpg"}
# ]

#  15.times do
#       Trip.create(
#           name: Faker::App.name,
#           location: "#{Faker::Address.country}",
#           description: Faker::Lorem.paragraph(length: [50..200]),
#           price: rand(100..1000),
#           rating: rand(3..5.0).round(2),
#           image_url: hotels.sample,
#           user_id: User.all.sample.id
#       )
#  end

# # CREATE REVIEWS

#  Trip.all.each do |trip|
#     rand(3..5) do
#        trip.reviews.create(
#           comment: Faker::Quote.matz,
#           user_id: User.all.sample.id
#         )
#     end
#  end

puts "Done seeding ✅"