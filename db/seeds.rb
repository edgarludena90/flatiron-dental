require 'faker'
Dentist.destroy_all
Patient.destroy_all
Appointment.destroy_all
Procedure.destroy_all

puts ("seeding dentist!!!")
Dentist.create(title: 'DMD', name: 'Edgar Ludena', bio: Faker::Movies::Departed.quote, email:'edgarludena@dentalclinic.med', password: '123')
20.times do
  dentist = Dentist.create(
    title: "DMD",
    name: Faker::Movies::Departed.character,
    bio: Faker::Movies::Departed.quote,
    email: "#{Faker::Internet.username}@dentalclinic.med",
    # password to access all created users
    password: "password"
  )
end
puts ("seeding patients!!!")
Patient.create(name: "Danna Cabral", age: rand(18..65), email: "DCA@gmail.com", password: "123")
20.times do
  Patient.create(
    name: Faker::TvShows::SouthPark.character,
    age: rand(18..65),
    email: Faker::Internet.free_email,
    password: "password"
  )
end

puts ("seeding Procedures!!!")
Procedure.create([
  {name: "root_canal", price: rand(300..1200)},
  {name: "prophylaxis", price: rand(300..1200)},
  {name: "extraction", price: rand(300..1200)},
  {name: "veneers", price: rand(300..1200)},
  {name: "fillings", price: rand(300..1200)},
  {name: "braces", price: rand(300..1200)},
  {name: "invisalign", price: rand(300..1200)},
  {name: "teeth_whitening", price: rand(300..1200)},
  {name: "crowns", price: rand(300..1200)}
])


puts ("seeding Appointment!!!")
20.times do
  Appointment.create(
    dentist_id: rand(1..20),
    patient_id: rand(1..20),
    procedure_id: rand(1..9),
    location: Faker::TvShows::GameOfThrones.city,
    notes: Faker::TvShows::GameOfThrones.quote,
    date: Faker::Date.forward(days: 23)
  )
end

puts ("seeding done!!!")
