# node-riminder-api
⚡️ Riminder API Node Wrapper

## Install

```bash
npm install --save riminder-js-sdk
```

## Usage

> **Note:** Please mind that this package is browser capable only, in order to use Riminder SDK in NodeJS envirenment you should install `riminder-nodejs-sdk` package instead.

```javascript
let API_Key = "your_api_key";
let app = new rimidnerSdk.Riminder({API_Key: API_Key});
```

## API

### riminderSdk.Riminder

Class constructor for your app instance, it should be called with an `options` object where you define your `API_Key`.

Keep in mind that this class is Singleton, so that no more than one app instance is available at the same time.

### riminderSdk.Riminder_instance

A static property that contains the app instance after construction and can be accessed from anywhere on the app runtime.

### riminder.Riminder.objects

An object conatining all the API methods a user can access after instanciating the app.

The next points are available under the `objects` property.

> **Note:** All methods return a Promise when called.

## Api methods
For any methods that needs `*_id` and `*_reference`
  you need to provide at least one of them but not necessarily both.

#### objects.getSources

Method that gets a list sources or filtered ones, and accepts an object as an argument, as follows:

```javascript
let app = new riminderSdk.Riminder({API_Key: "api-key-here"});
app.objects.getSources({where: {...}, page: 1, itemsPerPage: 10});
```

The options object is composed from a where clause where you define your constraints, and a page property to ask for a specific page and an itemsPerPage property to limit the number of items tou want on each page.

#### objects.getSource

Method that gets on source by id, it accepts one argument which is the id of the wanted source

```javascript
app.objects.getSource("source_id_here");
```

#### objects.getFilters

Method that gets a list filter and accepts an object as an argument, as follows

```javascript
app.objects.getFilters({where: {...}, page: 1, itemsPerPage: 10});
```

#### objects.getFilter

Method that gets on filter by id, it accepts one argument which is the id of the wanted source

```javascript
app.objects.getFilter("filter_id", "filter_reference");
```

#### objects.getProfiles

Method that gets a list of profiles or filtered one, and also accepts an options object as an argument (the same as `getSources`).

```javascript
app.objects.getProfiles({where: {...}, page: 1, itemsPerPage: 10});
```

#### objects.getProfile

Method that gets one profile by id and source id, and it accepts two arguments, the wanted profile id as a first argument, and the associated source id as a second one.

```javascript
app.objects.getProfile("profile_id_here", "associated_source_id_here", "profile_reference");
```

#### objects.getProfileDocuments

Method that gets documents associated to a profile. It has the same signature as the getProfile.

```javascript
app.objects.getProfileDocuments("profile_id_here", "associated_source_id_here", "profile_reference");
```

#### objects.getProfileExtractions

Method that gets profile extrations. It has the same signature as the getProfile.

```javascript
app.objects.getProfileExtractions("profile_id_here", "associated_source_id_here", "profile_reference");
```

#### objects.getProfileJobs

Method that gets profile jobs. It has the same signature as the getProfile.

```javascript
app.objects.getProfileJobs("profile_id_here", "associated_source_id_here", "profile_reference");
```

#### updateProfileStage

Method taht updates job's stage value, associated to a profile.

```javascript
app.objects.updateProfileStage("profile_id", "source_id", "job_id", "stage_new_value", "profile_reference", "filter_reference");
```

#### updateProfileRating

Method that updates job's rating, associated to a profile.

```javascript
app.objects.updateProfileRating("profile_id", "source_id", "job_id", "rating_new_value", "profile_reference", "filter_reference");
```

## Todos

The next steps are:

1. Create the webhooks API SDK
2. Build test suite for the whole SDK
3. Create a logic for the `objects.createResumeForProfile` method
4. Introduce typings for the SDK (manually generation if no automatic way is possible)
5. Correct the build system bug of tasks order
