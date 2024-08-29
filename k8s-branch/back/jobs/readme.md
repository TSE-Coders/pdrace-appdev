## PD Race on K8s


Let's start by creating the Database. 

1. Go to the /back directory 
```
cd back
```
2. Deploy the postgresdb service by applying the postgres.yaml

```
kubectl apply -f deployments/postgres.yaml 
```

3. Verify that the postgresdb pod is up and running with **kubectl get pods**


```
kubectl get pods

## Output: 

NAME                          READY   STATUS    RESTARTS   AGE
postgresdb-6d7c8886c5-tmfmd   1/1     Running   0          105s

```
With the database ready we can now start the backend

1. Let's use some jobs to migrate and seed with data the ruby on rails Databases in postgres

```
kubectl apply -f jobs/migrate.yaml 

## output: job.batch/pdserver-migrate created

kubectl apply -f jobs/seed.yaml 

## output: job.batch/pdserver-seed created

```

2. Wait a couple of minutes and confirm that the jobs have finished

```
kubectl get pods

## output: 
pdserver-migrate-st4tc        0/1     Completed   0          38s
pdserver-seed-lwg2s           0/1     Completed   0          25s
postgresdb-6d7c8886c5-tmfmd   1/1     Running     0          8m39s
```

With the jobs ready is time to deploy or first the Ruby on rails server 

1. Apply the pdserver.yaml 

```
kubectl apply -f deployments/pdserver.yaml 
```

2. Validate the pdserverpod is up and running

```
kubectl get pods

## output:
pdserver-6d89d7468c-6chb7     1/1     Running     0          99s
pdserver-migrate-st4tc        0/1     Completed   0          5m58s
pdserver-seed-lwg2s           0/1     Completed   0          5m45s
postgresdb-6d7c8886c5-tmfmd   1/1     Running     0          13m
```

3. With the server deployed, lets confirm the pdserver is able to connect with the postgresdb by asking the status of the migrations

```
kubectl exec -it pdserver-6d89d7468c-6chb7 -- bash -c "cd /server  && bin/rails db:migrate:status "

## output 
...
database: pdrace

 Status   Migration ID    Migration Name
--------------------------------------------------
   up     20231108020917  Create user
   up     20231108020950  Create pod
   up     20231108025503  Create events
   up     20231108050354  Create events users
   up     20231209201828  Addpoints to users
   up     20231214190315  Addpoints to pods

```

Now let's deploy the client service

1. Exit from the back directory and get into the front directory

```
cd ..

cd front

```

2. From here let's deploy the pdclient service with the pdclient.yaml

```
kubectl apply -f pdclient.yaml 

## output
deployment.apps/pdclient created

```

3. Validate the deployment

```
kubectl get pods

## output:

pdclient-77d5947955-kzwh4     1/1     Running     0          81s
pdserver-6d89d7468c-6chb7     1/1     Running     0          16m
pdserver-migrate-st4tc        0/1     Completed   0          21m
pdserver-seed-lwg2s           0/1     Completed   0          21m
postgresdb-6d7c8886c5-tmfmd   1/1     Running  

```

4. Now the application should be running. To confirm this let's forward the port 3002 of the pdclient container to the 3002 of your local host: 

```
kubectl port-forward pdclient-77d5947955-kzwh4 3002:3002
```
