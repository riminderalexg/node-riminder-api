import { create, getOne, getList, generateURLParams } from "./utils";
import defaults from "./defaults";
import { httpRequest } from "./http";

export interface RiminderObjectsOptions {
  where?: any;
  page?: number;
  itemsPerPage?: number;
}

export default {
  getSources: (options?: RiminderObjectsOptions) => {
    return getList("sources", options);
  },
  getSource: (id: string) => {
    let query = {
      'source_id': id
    }
    return getOne("source", query);
  },
  getFilters: (options?: RiminderObjectsOptions) => {
    return getList("filters", options);
  },
  getFilter: (id: string, reference: string) => {
    let query = {
    }
    filter_id ? query['filter_id'] = id : 1
    filter_reference ? query['filter_reference'] = id : 1
    return getOne("filter", query);
  },
  getProfiles: (options?: RiminderObjectsOptions) => {
    return getList("profiles", options);
  },
  getProfile: (id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    profile_id ? query['profile_id'] = id : 1
    profile_reference ? query['profile_reference'] = id : 1
    return getOne("profile", query);
  },
  createResumeForProfile: (profile_id: string, source_id: string, file: File) => {

  },
  getProfileDocuments: (id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    profile_id ? query['profile_id'] = id : 1
    profile_reference ? query['profile_reference'] = id : 1
    return getOne("profile/documents", query);
  },
  getProfileParsing: (id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    profile_id ? query['profile_id'] = id : 1
    profile_reference ? query['profile_reference'] = id : 1
    return getOne("profile/parsing", query);
  },
  getProfileScoring: (id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    profile_id ? query['profile_id'] = id : 1
    profile_reference ? query['profile_reference'] = id : 1
    return getOne("profile/scoring", query);
  },
  updateProfileStage: (id: string, source_id: string, filter_id: string, stage: string, profile_id, profile_reference, filter_reference) => {
    let url = `${defaults.API_URL}/profile/stage`;
    let body = {
      source_id: source_id,
      stage: stage,
    };
    profile_id ? query['profile_id'] = id : 1
    profile_reference ? query['profile_reference'] = id : 1
    filter_id ? query['filter_id'] = id : 1
    filter_reference ? query['filter_reference'] = id : 1

    return httpRequest(url, { body });
  },
  updateProfileRating: (id: string, source_id: string, filter_id: string, rating: number, profile_id, profile_reference, filter_reference) => {
    let url = `${defaults.API_URL}/profile/rating`;
    let body = {
      source_id: source_id,
      rating: rating,
    };
    profile_id ? query['profile_id'] = id : 1
    profile_reference ? query['profile_reference'] = id : 1
    filter_id ? query['filter_id'] = id : 1
    filter_reference ? query['filter_reference'] = id : 1
    return httpRequest(url, { body });
  }
};
