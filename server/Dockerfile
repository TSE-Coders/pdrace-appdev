FROM ruby:3.3.4
WORKDIR /server
COPY . . 
ENV BUNDLE_PATH=/gems
RUN bundle install
# RUN chmod +x /pd-user-api/start.sh
EXPOSE 3000
CMD sh -c "sleep 500000"
