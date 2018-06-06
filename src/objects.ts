import { create, getOne, getList, generateURLParams } from "./utils";
import defaults from "./defaults";
import { httpRequest } from "./http";

export interface RiminderObjectsOptions {
  where?: any;
  page?: number;
  itemsPerPage?: number;
}

function add_if_not_empty(obj:any, key:string, elem:any) {
    if (elem){
      obj[key] = elem
    }
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
  getFilter: (filter_id: string, filter_reference: string) => {
    let query:any = {
    }
    add_if_not_empty(query, 'filter_id', filter_id)
    add_if_not_empty(query, 'filter_reference', filter_reference)
    return getOne("filter", query);
  },
  getProfiles: (options?: RiminderObjectsOptions) => {
    return getList("profiles", options);
  },
  getProfile: (profile_id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    add_if_not_empty(query, 'profile_id', profile_id)
    add_if_not_empty(query, 'profile_reference', profile_reference)
    return getOne("profile", query);
  },
  createResumeForProfile: (profile_id: string, source_id: string, file: File) => {

  },
  getProfileDocuments: (profile_id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    add_if_not_empty(query, 'profile_id', profile_id)
    add_if_not_empty(query, 'profile_reference', profile_reference)
    return getOne("profile/documents", query);
  },
  getProfileParsing: (profile_id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    add_if_not_empty(query, 'profile_id', profile_id)
    add_if_not_empty(query, 'profile_reference', profile_reference)
    return getOne("profile/parsing", query);
  },
  getProfileScoring: (profile_id: string, source_id: string, profile_reference: string) => {
    let query = {
      'source_id': source_id,
    }
    add_if_not_empty(query, 'profile_id', profile_id)
    add_if_not_empty(query, 'profile_reference', profile_reference)
    return getOne("profile/scoring", query);
  },
  updateProfileStage: (profile_id: string, source_id: string, filter_id: string, stage: string, profile_reference: string, filter_reference: string) => {
    let url = `${defaults.API_URL}/profile/stage`;
    let body = {
      source_id: source_id,
      stage: stage,
    };
    add_if_not_empty(body, 'profile_id', profile_id)
    add_if_not_empty(body, 'profile_reference', profile_reference)
    add_if_not_empty(body, 'filter_id', filter_id)
    add_if_not_empty(body, 'filter_reference', filter_reference)

    return httpRequest(url, { body });
  },
  updateProfileRating: (profile_id: string, source_id: string, filter_id: string, rating: number, profile_reference: string, filter_reference: string) => {
    let url = `${defaults.API_URL}/profile/rating`;
    let body = {
      source_id: source_id,
      rating: rating,
    };
    add_if_not_empty(body, 'profile_id', profile_id)
    add_if_not_empty(body, 'profile_reference', profile_reference)
    add_if_not_empty(body, 'filter_id', filter_id)
    add_if_not_empty(body, 'filter_reference', filter_reference)
    return httpRequest(url, { body });
  }
};
