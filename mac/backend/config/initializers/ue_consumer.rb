# require 'bunny'


# connection = Bunny.new(automatically_recover: false)
# connection.start

# channel = connection.create_channel
# exchange = channel.topic('zendesk')
# queue = channel.queue('', durable: false)


# queue.bind(exchange, routing_key: "new.userevent")

# begin
#   queue.subscribe(block: true) do |delivery_info, _properties, body|
#     puts " [x] #{delivery_info.routing_key}:#{body}"
#   end
# rescue Interrupt => _
#   channel.close
#   connection.close

#   exit(0)
# end

