require 'sneakers'
require 'bunny'

Sneakers.configure :connection =>  Bunny.new(hostname: 'rabbitmq', port: 5672, automatically_recover: true)

Sneakers.logger = Rails.logger

Sneakers.logger.level = Logger::INFO
