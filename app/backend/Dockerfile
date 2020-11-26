FROM tiangolo/uwsgi-nginx-flask:python3.6-alpine3.7
RUN apk --update add bash nano
RUN mkdir /code

# install flask requirements
WORKDIR /code
COPY ./flask/requirements.txt /code
RUN pip install -r requirements.txt

# set up directory for cloning project repos
WORKDIR /projects
RUN apk add --no-cache git

# clone ascii-art project
RUN ["git", "clone", "https://github.com/haondt/ascii-art.git"]
