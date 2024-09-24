##dev
FROM ruby:3.3.4
WORKDIR /server
COPY . . 
ENV BUNDLE_PATH=/gems
RUN bundle install
RUN chmod +x /server/start.sh
EXPOSE 3000
# CMD ["/server/start.sh"]
# CMD sh -c "sleep 500000"

##qa
# FROM ruby:3.3.4
# WORKDIR /server
# COPY . . 
# ENV BUNDLE_PATH=/gems
# RUN bundle install
# RUN chmod +x /server/start.sh
# EXPOSE 3000
# CMD ["/server/start.sh"]
# CMD sh -c "sleep 500000"
