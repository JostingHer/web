export type SectioData = {
  text: string;
  photo?: {
    asset?: { _ref?: string };
    options?: {
      collapsible?: boolean;
      collapsed?: boolean;
    };
  };
  background?: {
    imagenPC?: {
      asset?: {
        _ref?: string;
        _type?: 'reference';
      };
      crop?: {
        _type?: 'sanity.imageCrop';
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
      hotspot?: {
        _type?: 'sanity.imageHotspot';
        x?: number;
        y?: number;
        width?: number;
        height?: number;
      };
      _type?: 'photo';
    };
  }
 
};
export type HeroBlogData = {
  heroBlog: {
    background?: {
      imagenPC?: {
        asset?: {
          _ref?: string;
          _type?: 'reference';
        };
        crop?: {
          _type?: 'sanity.imageCrop';
          top?: number;
          bottom?: number;
          left?: number;
          right?: number;
        };
        hotspot?: {
          _type?: 'sanity.imageHotspot';
          x?: number;
          y?: number;
          width?: number;
          height?: number;
        };
        _type?: 'photo';
      };
    };
   
    text?: string;
    _type?: 'heroHome';
  };
};



export type ContactData = {
    icon?: {
      asset?: { _ref?: string };
      hotspot?: boolean;
    };
    info?: string;
  };
  
  export type Education = {
    image?: {
      asset?: { _ref?: string };
      hotspot?: boolean;
    };
    degree?: string;
    institution?: string;
    date?: string;
    description?: string;
    url?: string;
  };
  
  export type Experience = {
    image?: {
      asset?: { _ref?: string };
      hotspot?: boolean;
    };
    nameJob?: string;
    placeJob?: string;
    date?: string;
    description?: string;
  };


  export type Interview = {
    link: string;
    _key: string;
    title: string;
    image: {
      _type: string;
      asset: {
        _type: string;
        url: string; // Asumiendo que 'url' es una propiedad común en los assets de imágenes
      };
    };
    _type: string;
  }
  
  
  export type HeroHome = {
    text?: string;
    background?: {
      asset?: { _ref?: string };
      options?: {
        collapsible?: boolean;
        collapsed?: boolean;
      };
    };
  };
  
  export type Skills = {
    icon?: {
      asset?: { _ref?: string };
      hotspot?: boolean;
    };
    info?: string;
  };
  
  export type Post = {
    excerpt?: string;
    publishedAt?: string
    primaryPhoto?: {
      imagenPC?: {
        asset?: {
          _ref?: string;
          _type?: 'reference';
        };
        crop?: {
          _type?: 'sanity.imageCrop';
          top?: number;
          bottom?: number;
          left?: number;
          right?: number;
        };
        hotspot?: {
          _type?: 'sanity.imageHotspot';
          x?: number;
          y?: number;
          width?: number;
          height?: number;
        };
        _type?: 'photo';
      };
    }
    heroPost?: {
      asset?: { _ref?: string };
    };
    title?: string;
    slug?: {
      current?: string;
    };
    content?: string[]; // Array de bloques de tipo markdown
  };
  
  export type Blog = {
    heroBlog?: {
      asset?: { _ref?: string };
    };
    posts?: Post[];
  };
  
  // Tipo general que agrupa todas las secciones
  export type WebsiteData = {
    contactData?: ContactData[];
    education?: Education[];
    experience?: Experience[];
    heroHome?: HeroHome;
    heroBlog?: HeroHome;
    skills?: Skills[];
    blog?: Blog;
  };
  


export type Generals = {
  cv: {
    _type: 'file';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  _createdAt: string;
  contact: ContactData[];
  cvUrl: string;
  _rev: string;
  _type: 'generals';
  _updatedAt: string;
  _id: string;
  skills: Skills[];
};