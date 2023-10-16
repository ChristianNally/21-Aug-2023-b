
# username = 'monkeyfuzz'

# # typically, ruby programmers use snake_case

# puts 7 === '7'

# # there is no type coersion in ruby
# # so people typically use ==

# puts 7 == '7'  

# # every single value you create is an object
# # this is a way to check all the methods on an object

# 7.methods

# # we fire functions on objects, using dot notation.
# # there are no operators in Ruby

# # this...
# puts 7 == '7' 

# # ... is converted to 
# puts 7.== '7'

# # ... is converted to 
# puts 7.==('7')



# 7.to_i

#
# end is like a JS ending curly brace
#

# def foo arg
#   puts "BAR! #{arg}"
#   p "BAR! #{arg}"
#   return 345
#   puts "FOO"
# end

# val = foo 10
# p val.to_s

# #
# # we often write ruby without parentheses
# #

# val = foo 10
# puts val

# # Ruby has a few quirks with statements and logical
# # operators

# # 1) no brackets needed

# result = 42

# if result < 10
#   puts "result is less than 10"
# end

# # # elsif ends a block in and of itself

# if result < 10
#   puts "result is less than 10"
# elsif result == 10
#   puts "result is equal 10"
# else
#   puts "result is greater than 10"
# end


# unless result == 42
#   p "You don't have the ultimate answer"
# end

# # === in Ruby is a check for whether 
# # something is included within something else


# # unless is the opposite of 'if' and 
# # this token allows you to make conditionals 
# # that test for the positive case



# # one liner IFs are interesting but 
# # you put the one-liner command first.

# puts "Truth!" if result > 1

# puts "Will be output" unless 10 < 1




# #


# # ruby has two and only two falsey values: 
# # nil and false

# # MANY ways to loop in Ruby
# # (loop do, while <condition>, until <condition>, ...)

# i = 0
# loop do
#   puts i
#   break if i > 10
#   i = i + 1
# end

# for i in 0..9 do 
#   p i 
# end

# (0..2).each do
#   p 'mf'
# end

# # a block starts with 'do' and ends with 'end'

# # template literals (like `the quick ${color} fox` in JS)
# # become ... 
# puts "the quick #{username} fox"
# # ... in Ruby

# # ' means exactly, just like in JS

# username = 'moinkey fuzz'
# p "user: #{username}"
# p 'user: #{username}'



# const myObject = {
#   prop1: 'value',
#   prop2: 42
# };



# # JS Objects and Hashes in Ruby


# hash1 = {a: 1, b: 2, c: 3}
# hash = {:a => 1, :b => 2, :c => 3}

# p "string version of #{hash}"
# p "proof: #{hash[:a]}"

# # notice that the 'properties' have prepended : characters

# # dot notation won't retrieve properties
# # instead you must use square brackets notation

# # to loop through a hash use .each
# hash.each do |pair|
#   print pair
# end

# hash.each do |k,v|
#   puts "#{k} ==> #{v}"
# end

# # Since Ruby is synchronous (er... since Ruby doesn't have
# # an event loop) 'callbacks' are rare BUT we do have yield

# def high_order
#   puts "start"
#   yield
#   puts "end"
# end

# high_order { puts "CALLBACK GOES HERE" }

# # A yield can take a parameter

def high_order
  puts "start"
  (0..3).each do |ii|
    yield ii
  end
  puts "end"
end

high_order { |num| puts "CALLBACK GOES HERE: #{num}" }
