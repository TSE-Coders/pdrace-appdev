FROM ruby:3.3.4
WORKDIR /server
COPY . . 
ENV BUNDLE_PATH=/gems
RUN bundle install
# RUN chmod +x /server/start.sh
EXPOSE 3000
CMD ["sh -c "sleep 5 && bin/rake sneakers:run""]
# CMD ["/pd-user-api/start.sh"]
