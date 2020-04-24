/*!
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            type Type =
                "TYPE_DOUBLE"| "TYPE_FLOAT"| "TYPE_INT64"| "TYPE_UINT64"| "TYPE_INT32"| "TYPE_FIXED64"| "TYPE_FIXED32"| "TYPE_BOOL"| "TYPE_STRING"| "TYPE_GROUP"| "TYPE_MESSAGE"| "TYPE_BYTES"| "TYPE_UINT32"| "TYPE_ENUM"| "TYPE_SFIXED32"| "TYPE_SFIXED64"| "TYPE_SINT32"| "TYPE_SINT64";

            /** Label enum. */
            type Label =
                "LABEL_OPTIONAL"| "LABEL_REQUIRED"| "LABEL_REPEATED";
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            type OptimizeMode =
                "SPEED"| "CODE_SIZE"| "LITE_RUNTIME";
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            type CType =
                "STRING"| "CORD"| "STRING_PIECE";

            /** JSType enum. */
            type JSType =
                "JS_NORMAL"| "JS_STRING"| "JS_NUMBER";
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        type NullValue =
            "NULL_VALUE";

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|string);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|string);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace firestore. */
    namespace firestore {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a DocumentMask. */
            interface IDocumentMask {

                /** DocumentMask fieldPaths */
                fieldPaths?: (string[]|null);
            }

            /** Represents a DocumentMask. */
            class DocumentMask implements IDocumentMask {

                /**
                 * Constructs a new DocumentMask.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IDocumentMask);

                /** DocumentMask fieldPaths. */
                public fieldPaths: string[];

                /**
                 * Creates a DocumentMask message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentMask
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.DocumentMask;

                /**
                 * Creates a plain object from a DocumentMask message. Also converts values to other types if specified.
                 * @param message DocumentMask
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.DocumentMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentMask to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Precondition. */
            interface IPrecondition {

                /** Precondition exists */
                exists?: (boolean|null);

                /** Precondition updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Precondition. */
            class Precondition implements IPrecondition {

                /**
                 * Constructs a new Precondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IPrecondition);

                /** Precondition exists. */
                public exists: boolean;

                /** Precondition updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** Precondition conditionType. */
                public conditionType?: ("exists"|"updateTime");

                /**
                 * Creates a Precondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Precondition
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Precondition;

                /**
                 * Creates a plain object from a Precondition message. Also converts values to other types if specified.
                 * @param message Precondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.Precondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Precondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TransactionOptions. */
            interface ITransactionOptions {

                /** TransactionOptions readOnly */
                readOnly?: (google.firestore.v1beta1.TransactionOptions.IReadOnly|null);

                /** TransactionOptions readWrite */
                readWrite?: (google.firestore.v1beta1.TransactionOptions.IReadWrite|null);
            }

            /** Represents a TransactionOptions. */
            class TransactionOptions implements ITransactionOptions {

                /**
                 * Constructs a new TransactionOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.ITransactionOptions);

                /** TransactionOptions readOnly. */
                public readOnly?: (google.firestore.v1beta1.TransactionOptions.IReadOnly|null);

                /** TransactionOptions readWrite. */
                public readWrite?: (google.firestore.v1beta1.TransactionOptions.IReadWrite|null);

                /** TransactionOptions mode. */
                public mode?: ("readOnly"|"readWrite");

                /**
                 * Creates a TransactionOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransactionOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.TransactionOptions;

                /**
                 * Creates a plain object from a TransactionOptions message. Also converts values to other types if specified.
                 * @param message TransactionOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.TransactionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransactionOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace TransactionOptions {

                /** Properties of a ReadWrite. */
                interface IReadWrite {

                    /** ReadWrite retryTransaction */
                    retryTransaction?: (Uint8Array|null);
                }

                /** Represents a ReadWrite. */
                class ReadWrite implements IReadWrite {

                    /**
                     * Constructs a new ReadWrite.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.TransactionOptions.IReadWrite);

                    /** ReadWrite retryTransaction. */
                    public retryTransaction: Uint8Array;

                    /**
                     * Creates a ReadWrite message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReadWrite
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.TransactionOptions.ReadWrite;

                    /**
                     * Creates a plain object from a ReadWrite message. Also converts values to other types if specified.
                     * @param message ReadWrite
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.TransactionOptions.ReadWrite, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReadWrite to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReadOnly. */
                interface IReadOnly {

                    /** ReadOnly readTime */
                    readTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ReadOnly. */
                class ReadOnly implements IReadOnly {

                    /**
                     * Constructs a new ReadOnly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.TransactionOptions.IReadOnly);

                    /** ReadOnly readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ReadOnly consistencySelector. */
                    public consistencySelector?: "readTime";

                    /**
                     * Creates a ReadOnly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReadOnly
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.TransactionOptions.ReadOnly;

                    /**
                     * Creates a plain object from a ReadOnly message. Also converts values to other types if specified.
                     * @param message ReadOnly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.TransactionOptions.ReadOnly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReadOnly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Document. */
            interface IDocument {

                /** Document name */
                name?: (string|null);

                /** Document fields */
                fields?: ({ [k: string]: google.firestore.v1beta1.IValue }|null);

                /** Document createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Document updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Document. */
            class Document implements IDocument {

                /**
                 * Constructs a new Document.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IDocument);

                /** Document name. */
                public name: string;

                /** Document fields. */
                public fields: { [k: string]: google.firestore.v1beta1.IValue };

                /** Document createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Document updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a Document message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Document
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Document;

                /**
                 * Creates a plain object from a Document message. Also converts values to other types if specified.
                 * @param message Document
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Document to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Value. */
            interface IValue {

                /** Value nullValue */
                nullValue?: (google.protobuf.NullValue|null);

                /** Value booleanValue */
                booleanValue?: (boolean|null);

                /** Value integerValue */
                integerValue?: (number|string|null);

                /** Value doubleValue */
                doubleValue?: (number|null);

                /** Value timestampValue */
                timestampValue?: (google.protobuf.ITimestamp|null);

                /** Value stringValue */
                stringValue?: (string|null);

                /** Value bytesValue */
                bytesValue?: (Uint8Array|null);

                /** Value referenceValue */
                referenceValue?: (string|null);

                /** Value geoPointValue */
                geoPointValue?: (google.type.ILatLng|null);

                /** Value arrayValue */
                arrayValue?: (google.firestore.v1beta1.IArrayValue|null);

                /** Value mapValue */
                mapValue?: (google.firestore.v1beta1.IMapValue|null);
            }

            /** Represents a Value. */
            class Value implements IValue {

                /**
                 * Constructs a new Value.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IValue);

                /** Value nullValue. */
                public nullValue: google.protobuf.NullValue;

                /** Value booleanValue. */
                public booleanValue: boolean;

                /** Value integerValue. */
                public integerValue: (number|string);

                /** Value doubleValue. */
                public doubleValue: number;

                /** Value timestampValue. */
                public timestampValue?: (google.protobuf.ITimestamp|null);

                /** Value stringValue. */
                public stringValue: string;

                /** Value bytesValue. */
                public bytesValue: Uint8Array;

                /** Value referenceValue. */
                public referenceValue: string;

                /** Value geoPointValue. */
                public geoPointValue?: (google.type.ILatLng|null);

                /** Value arrayValue. */
                public arrayValue?: (google.firestore.v1beta1.IArrayValue|null);

                /** Value mapValue. */
                public mapValue?: (google.firestore.v1beta1.IMapValue|null);

                /** Value valueType. */
                public valueType?: ("nullValue"|"booleanValue"|"integerValue"|"doubleValue"|"timestampValue"|"stringValue"|"bytesValue"|"referenceValue"|"geoPointValue"|"arrayValue"|"mapValue");

                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Value
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Value;

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @param message Value
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Value to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ArrayValue. */
            interface IArrayValue {

                /** ArrayValue values */
                values?: (google.firestore.v1beta1.IValue[]|null);
            }

            /** Represents an ArrayValue. */
            class ArrayValue implements IArrayValue {

                /**
                 * Constructs a new ArrayValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IArrayValue);

                /** ArrayValue values. */
                public values: google.firestore.v1beta1.IValue[];

                /**
                 * Creates an ArrayValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ArrayValue
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ArrayValue;

                /**
                 * Creates a plain object from an ArrayValue message. Also converts values to other types if specified.
                 * @param message ArrayValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ArrayValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ArrayValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MapValue. */
            interface IMapValue {

                /** MapValue fields */
                fields?: ({ [k: string]: google.firestore.v1beta1.IValue }|null);
            }

            /** Represents a MapValue. */
            class MapValue implements IMapValue {

                /**
                 * Constructs a new MapValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IMapValue);

                /** MapValue fields. */
                public fields: { [k: string]: google.firestore.v1beta1.IValue };

                /**
                 * Creates a MapValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MapValue
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.MapValue;

                /**
                 * Creates a plain object from a MapValue message. Also converts values to other types if specified.
                 * @param message MapValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.MapValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MapValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a Firestore */
            class Firestore extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Firestore service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Calls GetDocument.
                 * @param request GetDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Document
                 */
                public getDocument(request: google.firestore.v1beta1.IGetDocumentRequest, callback: google.firestore.v1beta1.Firestore.GetDocumentCallback): void;

                /**
                 * Calls GetDocument.
                 * @param request GetDocumentRequest message or plain object
                 * @returns Promise
                 */
                public getDocument(request: google.firestore.v1beta1.IGetDocumentRequest): Promise<google.firestore.v1beta1.Document>;

                /**
                 * Calls ListDocuments.
                 * @param request ListDocumentsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListDocumentsResponse
                 */
                public listDocuments(request: google.firestore.v1beta1.IListDocumentsRequest, callback: google.firestore.v1beta1.Firestore.ListDocumentsCallback): void;

                /**
                 * Calls ListDocuments.
                 * @param request ListDocumentsRequest message or plain object
                 * @returns Promise
                 */
                public listDocuments(request: google.firestore.v1beta1.IListDocumentsRequest): Promise<google.firestore.v1beta1.ListDocumentsResponse>;

                /**
                 * Calls CreateDocument.
                 * @param request CreateDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Document
                 */
                public createDocument(request: google.firestore.v1beta1.ICreateDocumentRequest, callback: google.firestore.v1beta1.Firestore.CreateDocumentCallback): void;

                /**
                 * Calls CreateDocument.
                 * @param request CreateDocumentRequest message or plain object
                 * @returns Promise
                 */
                public createDocument(request: google.firestore.v1beta1.ICreateDocumentRequest): Promise<google.firestore.v1beta1.Document>;

                /**
                 * Calls UpdateDocument.
                 * @param request UpdateDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Document
                 */
                public updateDocument(request: google.firestore.v1beta1.IUpdateDocumentRequest, callback: google.firestore.v1beta1.Firestore.UpdateDocumentCallback): void;

                /**
                 * Calls UpdateDocument.
                 * @param request UpdateDocumentRequest message or plain object
                 * @returns Promise
                 */
                public updateDocument(request: google.firestore.v1beta1.IUpdateDocumentRequest): Promise<google.firestore.v1beta1.Document>;

                /**
                 * Calls DeleteDocument.
                 * @param request DeleteDocumentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteDocument(request: google.firestore.v1beta1.IDeleteDocumentRequest, callback: google.firestore.v1beta1.Firestore.DeleteDocumentCallback): void;

                /**
                 * Calls DeleteDocument.
                 * @param request DeleteDocumentRequest message or plain object
                 * @returns Promise
                 */
                public deleteDocument(request: google.firestore.v1beta1.IDeleteDocumentRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls BatchGetDocuments.
                 * @param request BatchGetDocumentsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BatchGetDocumentsResponse
                 */
                public batchGetDocuments(request: google.firestore.v1beta1.IBatchGetDocumentsRequest, callback: google.firestore.v1beta1.Firestore.BatchGetDocumentsCallback): void;

                /**
                 * Calls BatchGetDocuments.
                 * @param request BatchGetDocumentsRequest message or plain object
                 * @returns Promise
                 */
                public batchGetDocuments(request: google.firestore.v1beta1.IBatchGetDocumentsRequest): Promise<google.firestore.v1beta1.BatchGetDocumentsResponse>;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and BeginTransactionResponse
                 */
                public beginTransaction(request: google.firestore.v1beta1.IBeginTransactionRequest, callback: google.firestore.v1beta1.Firestore.BeginTransactionCallback): void;

                /**
                 * Calls BeginTransaction.
                 * @param request BeginTransactionRequest message or plain object
                 * @returns Promise
                 */
                public beginTransaction(request: google.firestore.v1beta1.IBeginTransactionRequest): Promise<google.firestore.v1beta1.BeginTransactionResponse>;

                /**
                 * Calls Commit.
                 * @param request CommitRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CommitResponse
                 */
                public commit(request: google.firestore.v1beta1.ICommitRequest, callback: google.firestore.v1beta1.Firestore.CommitCallback): void;

                /**
                 * Calls Commit.
                 * @param request CommitRequest message or plain object
                 * @returns Promise
                 */
                public commit(request: google.firestore.v1beta1.ICommitRequest): Promise<google.firestore.v1beta1.CommitResponse>;

                /**
                 * Calls Rollback.
                 * @param request RollbackRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public rollback(request: google.firestore.v1beta1.IRollbackRequest, callback: google.firestore.v1beta1.Firestore.RollbackCallback): void;

                /**
                 * Calls Rollback.
                 * @param request RollbackRequest message or plain object
                 * @returns Promise
                 */
                public rollback(request: google.firestore.v1beta1.IRollbackRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls RunQuery.
                 * @param request RunQueryRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and RunQueryResponse
                 */
                public runQuery(request: google.firestore.v1beta1.IRunQueryRequest, callback: google.firestore.v1beta1.Firestore.RunQueryCallback): void;

                /**
                 * Calls RunQuery.
                 * @param request RunQueryRequest message or plain object
                 * @returns Promise
                 */
                public runQuery(request: google.firestore.v1beta1.IRunQueryRequest): Promise<google.firestore.v1beta1.RunQueryResponse>;

                /**
                 * Calls Write.
                 * @param request WriteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and WriteResponse
                 */
                public write(request: google.firestore.v1beta1.IWriteRequest, callback: google.firestore.v1beta1.Firestore.WriteCallback): void;

                /**
                 * Calls Write.
                 * @param request WriteRequest message or plain object
                 * @returns Promise
                 */
                public write(request: google.firestore.v1beta1.IWriteRequest): Promise<google.firestore.v1beta1.WriteResponse>;

                /**
                 * Calls Listen.
                 * @param request ListenRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListenResponse
                 */
                public listen(request: google.firestore.v1beta1.IListenRequest, callback: google.firestore.v1beta1.Firestore.ListenCallback): void;

                /**
                 * Calls Listen.
                 * @param request ListenRequest message or plain object
                 * @returns Promise
                 */
                public listen(request: google.firestore.v1beta1.IListenRequest): Promise<google.firestore.v1beta1.ListenResponse>;

                /**
                 * Calls ListCollectionIds.
                 * @param request ListCollectionIdsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListCollectionIdsResponse
                 */
                public listCollectionIds(request: google.firestore.v1beta1.IListCollectionIdsRequest, callback: google.firestore.v1beta1.Firestore.ListCollectionIdsCallback): void;

                /**
                 * Calls ListCollectionIds.
                 * @param request ListCollectionIdsRequest message or plain object
                 * @returns Promise
                 */
                public listCollectionIds(request: google.firestore.v1beta1.IListCollectionIdsRequest): Promise<google.firestore.v1beta1.ListCollectionIdsResponse>;
            }

            namespace Firestore {

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#getDocument}.
                 * @param error Error, if any
                 * @param [response] Document
                 */
                type GetDocumentCallback = (error: (Error|null), response?: google.firestore.v1beta1.Document) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#listDocuments}.
                 * @param error Error, if any
                 * @param [response] ListDocumentsResponse
                 */
                type ListDocumentsCallback = (error: (Error|null), response?: google.firestore.v1beta1.ListDocumentsResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#createDocument}.
                 * @param error Error, if any
                 * @param [response] Document
                 */
                type CreateDocumentCallback = (error: (Error|null), response?: google.firestore.v1beta1.Document) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#updateDocument}.
                 * @param error Error, if any
                 * @param [response] Document
                 */
                type UpdateDocumentCallback = (error: (Error|null), response?: google.firestore.v1beta1.Document) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#deleteDocument}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteDocumentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#batchGetDocuments}.
                 * @param error Error, if any
                 * @param [response] BatchGetDocumentsResponse
                 */
                type BatchGetDocumentsCallback = (error: (Error|null), response?: google.firestore.v1beta1.BatchGetDocumentsResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#beginTransaction}.
                 * @param error Error, if any
                 * @param [response] BeginTransactionResponse
                 */
                type BeginTransactionCallback = (error: (Error|null), response?: google.firestore.v1beta1.BeginTransactionResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#commit}.
                 * @param error Error, if any
                 * @param [response] CommitResponse
                 */
                type CommitCallback = (error: (Error|null), response?: google.firestore.v1beta1.CommitResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#rollback}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type RollbackCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#runQuery}.
                 * @param error Error, if any
                 * @param [response] RunQueryResponse
                 */
                type RunQueryCallback = (error: (Error|null), response?: google.firestore.v1beta1.RunQueryResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#write}.
                 * @param error Error, if any
                 * @param [response] WriteResponse
                 */
                type WriteCallback = (error: (Error|null), response?: google.firestore.v1beta1.WriteResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#listen}.
                 * @param error Error, if any
                 * @param [response] ListenResponse
                 */
                type ListenCallback = (error: (Error|null), response?: google.firestore.v1beta1.ListenResponse) => void;

                /**
                 * Callback as used by {@link google.firestore.v1beta1.Firestore#listCollectionIds}.
                 * @param error Error, if any
                 * @param [response] ListCollectionIdsResponse
                 */
                type ListCollectionIdsCallback = (error: (Error|null), response?: google.firestore.v1beta1.ListCollectionIdsResponse) => void;
            }

            /** Properties of a GetDocumentRequest. */
            interface IGetDocumentRequest {

                /** GetDocumentRequest name */
                name?: (string|null);

                /** GetDocumentRequest mask */
                mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** GetDocumentRequest transaction */
                transaction?: (Uint8Array|null);

                /** GetDocumentRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetDocumentRequest. */
            class GetDocumentRequest implements IGetDocumentRequest {

                /**
                 * Constructs a new GetDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IGetDocumentRequest);

                /** GetDocumentRequest name. */
                public name: string;

                /** GetDocumentRequest mask. */
                public mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** GetDocumentRequest transaction. */
                public transaction: Uint8Array;

                /** GetDocumentRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** GetDocumentRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"readTime");

                /**
                 * Creates a GetDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.GetDocumentRequest;

                /**
                 * Creates a plain object from a GetDocumentRequest message. Also converts values to other types if specified.
                 * @param message GetDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.GetDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListDocumentsRequest. */
            interface IListDocumentsRequest {

                /** ListDocumentsRequest parent */
                parent?: (string|null);

                /** ListDocumentsRequest collectionId */
                collectionId?: (string|null);

                /** ListDocumentsRequest pageSize */
                pageSize?: (number|null);

                /** ListDocumentsRequest pageToken */
                pageToken?: (string|null);

                /** ListDocumentsRequest orderBy */
                orderBy?: (string|null);

                /** ListDocumentsRequest mask */
                mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** ListDocumentsRequest transaction */
                transaction?: (Uint8Array|null);

                /** ListDocumentsRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** ListDocumentsRequest showMissing */
                showMissing?: (boolean|null);
            }

            /** Represents a ListDocumentsRequest. */
            class ListDocumentsRequest implements IListDocumentsRequest {

                /**
                 * Constructs a new ListDocumentsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IListDocumentsRequest);

                /** ListDocumentsRequest parent. */
                public parent: string;

                /** ListDocumentsRequest collectionId. */
                public collectionId: string;

                /** ListDocumentsRequest pageSize. */
                public pageSize: number;

                /** ListDocumentsRequest pageToken. */
                public pageToken: string;

                /** ListDocumentsRequest orderBy. */
                public orderBy: string;

                /** ListDocumentsRequest mask. */
                public mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** ListDocumentsRequest transaction. */
                public transaction: Uint8Array;

                /** ListDocumentsRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** ListDocumentsRequest showMissing. */
                public showMissing: boolean;

                /** ListDocumentsRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"readTime");

                /**
                 * Creates a ListDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListDocumentsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ListDocumentsRequest;

                /**
                 * Creates a plain object from a ListDocumentsRequest message. Also converts values to other types if specified.
                 * @param message ListDocumentsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ListDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListDocumentsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListDocumentsResponse. */
            interface IListDocumentsResponse {

                /** ListDocumentsResponse documents */
                documents?: (google.firestore.v1beta1.IDocument[]|null);

                /** ListDocumentsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListDocumentsResponse. */
            class ListDocumentsResponse implements IListDocumentsResponse {

                /**
                 * Constructs a new ListDocumentsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IListDocumentsResponse);

                /** ListDocumentsResponse documents. */
                public documents: google.firestore.v1beta1.IDocument[];

                /** ListDocumentsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a ListDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListDocumentsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ListDocumentsResponse;

                /**
                 * Creates a plain object from a ListDocumentsResponse message. Also converts values to other types if specified.
                 * @param message ListDocumentsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ListDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListDocumentsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateDocumentRequest. */
            interface ICreateDocumentRequest {

                /** CreateDocumentRequest parent */
                parent?: (string|null);

                /** CreateDocumentRequest collectionId */
                collectionId?: (string|null);

                /** CreateDocumentRequest documentId */
                documentId?: (string|null);

                /** CreateDocumentRequest document */
                document?: (google.firestore.v1beta1.IDocument|null);

                /** CreateDocumentRequest mask */
                mask?: (google.firestore.v1beta1.IDocumentMask|null);
            }

            /** Represents a CreateDocumentRequest. */
            class CreateDocumentRequest implements ICreateDocumentRequest {

                /**
                 * Constructs a new CreateDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.ICreateDocumentRequest);

                /** CreateDocumentRequest parent. */
                public parent: string;

                /** CreateDocumentRequest collectionId. */
                public collectionId: string;

                /** CreateDocumentRequest documentId. */
                public documentId: string;

                /** CreateDocumentRequest document. */
                public document?: (google.firestore.v1beta1.IDocument|null);

                /** CreateDocumentRequest mask. */
                public mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /**
                 * Creates a CreateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.CreateDocumentRequest;

                /**
                 * Creates a plain object from a CreateDocumentRequest message. Also converts values to other types if specified.
                 * @param message CreateDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.CreateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateDocumentRequest. */
            interface IUpdateDocumentRequest {

                /** UpdateDocumentRequest document */
                document?: (google.firestore.v1beta1.IDocument|null);

                /** UpdateDocumentRequest updateMask */
                updateMask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** UpdateDocumentRequest mask */
                mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** UpdateDocumentRequest currentDocument */
                currentDocument?: (google.firestore.v1beta1.IPrecondition|null);
            }

            /** Represents an UpdateDocumentRequest. */
            class UpdateDocumentRequest implements IUpdateDocumentRequest {

                /**
                 * Constructs a new UpdateDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IUpdateDocumentRequest);

                /** UpdateDocumentRequest document. */
                public document?: (google.firestore.v1beta1.IDocument|null);

                /** UpdateDocumentRequest updateMask. */
                public updateMask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** UpdateDocumentRequest mask. */
                public mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** UpdateDocumentRequest currentDocument. */
                public currentDocument?: (google.firestore.v1beta1.IPrecondition|null);

                /**
                 * Creates an UpdateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.UpdateDocumentRequest;

                /**
                 * Creates a plain object from an UpdateDocumentRequest message. Also converts values to other types if specified.
                 * @param message UpdateDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.UpdateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteDocumentRequest. */
            interface IDeleteDocumentRequest {

                /** DeleteDocumentRequest name */
                name?: (string|null);

                /** DeleteDocumentRequest currentDocument */
                currentDocument?: (google.firestore.v1beta1.IPrecondition|null);
            }

            /** Represents a DeleteDocumentRequest. */
            class DeleteDocumentRequest implements IDeleteDocumentRequest {

                /**
                 * Constructs a new DeleteDocumentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IDeleteDocumentRequest);

                /** DeleteDocumentRequest name. */
                public name: string;

                /** DeleteDocumentRequest currentDocument. */
                public currentDocument?: (google.firestore.v1beta1.IPrecondition|null);

                /**
                 * Creates a DeleteDocumentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteDocumentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.DeleteDocumentRequest;

                /**
                 * Creates a plain object from a DeleteDocumentRequest message. Also converts values to other types if specified.
                 * @param message DeleteDocumentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.DeleteDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteDocumentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BatchGetDocumentsRequest. */
            interface IBatchGetDocumentsRequest {

                /** BatchGetDocumentsRequest database */
                database?: (string|null);

                /** BatchGetDocumentsRequest documents */
                documents?: (string[]|null);

                /** BatchGetDocumentsRequest mask */
                mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** BatchGetDocumentsRequest transaction */
                transaction?: (Uint8Array|null);

                /** BatchGetDocumentsRequest newTransaction */
                newTransaction?: (google.firestore.v1beta1.ITransactionOptions|null);

                /** BatchGetDocumentsRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a BatchGetDocumentsRequest. */
            class BatchGetDocumentsRequest implements IBatchGetDocumentsRequest {

                /**
                 * Constructs a new BatchGetDocumentsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IBatchGetDocumentsRequest);

                /** BatchGetDocumentsRequest database. */
                public database: string;

                /** BatchGetDocumentsRequest documents. */
                public documents: string[];

                /** BatchGetDocumentsRequest mask. */
                public mask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** BatchGetDocumentsRequest transaction. */
                public transaction: Uint8Array;

                /** BatchGetDocumentsRequest newTransaction. */
                public newTransaction?: (google.firestore.v1beta1.ITransactionOptions|null);

                /** BatchGetDocumentsRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** BatchGetDocumentsRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"newTransaction"|"readTime");

                /**
                 * Creates a BatchGetDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchGetDocumentsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.BatchGetDocumentsRequest;

                /**
                 * Creates a plain object from a BatchGetDocumentsRequest message. Also converts values to other types if specified.
                 * @param message BatchGetDocumentsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.BatchGetDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchGetDocumentsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BatchGetDocumentsResponse. */
            interface IBatchGetDocumentsResponse {

                /** BatchGetDocumentsResponse found */
                found?: (google.firestore.v1beta1.IDocument|null);

                /** BatchGetDocumentsResponse missing */
                missing?: (string|null);

                /** BatchGetDocumentsResponse transaction */
                transaction?: (Uint8Array|null);

                /** BatchGetDocumentsResponse readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a BatchGetDocumentsResponse. */
            class BatchGetDocumentsResponse implements IBatchGetDocumentsResponse {

                /**
                 * Constructs a new BatchGetDocumentsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IBatchGetDocumentsResponse);

                /** BatchGetDocumentsResponse found. */
                public found?: (google.firestore.v1beta1.IDocument|null);

                /** BatchGetDocumentsResponse missing. */
                public missing: string;

                /** BatchGetDocumentsResponse transaction. */
                public transaction: Uint8Array;

                /** BatchGetDocumentsResponse readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** BatchGetDocumentsResponse result. */
                public result?: ("found"|"missing");

                /**
                 * Creates a BatchGetDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatchGetDocumentsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.BatchGetDocumentsResponse;

                /**
                 * Creates a plain object from a BatchGetDocumentsResponse message. Also converts values to other types if specified.
                 * @param message BatchGetDocumentsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.BatchGetDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatchGetDocumentsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BeginTransactionRequest. */
            interface IBeginTransactionRequest {

                /** BeginTransactionRequest database */
                database?: (string|null);

                /** BeginTransactionRequest options */
                options?: (google.firestore.v1beta1.ITransactionOptions|null);
            }

            /** Represents a BeginTransactionRequest. */
            class BeginTransactionRequest implements IBeginTransactionRequest {

                /**
                 * Constructs a new BeginTransactionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IBeginTransactionRequest);

                /** BeginTransactionRequest database. */
                public database: string;

                /** BeginTransactionRequest options. */
                public options?: (google.firestore.v1beta1.ITransactionOptions|null);

                /**
                 * Creates a BeginTransactionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BeginTransactionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.BeginTransactionRequest;

                /**
                 * Creates a plain object from a BeginTransactionRequest message. Also converts values to other types if specified.
                 * @param message BeginTransactionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.BeginTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BeginTransactionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BeginTransactionResponse. */
            interface IBeginTransactionResponse {

                /** BeginTransactionResponse transaction */
                transaction?: (Uint8Array|null);
            }

            /** Represents a BeginTransactionResponse. */
            class BeginTransactionResponse implements IBeginTransactionResponse {

                /**
                 * Constructs a new BeginTransactionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IBeginTransactionResponse);

                /** BeginTransactionResponse transaction. */
                public transaction: Uint8Array;

                /**
                 * Creates a BeginTransactionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BeginTransactionResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.BeginTransactionResponse;

                /**
                 * Creates a plain object from a BeginTransactionResponse message. Also converts values to other types if specified.
                 * @param message BeginTransactionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.BeginTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BeginTransactionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CommitRequest. */
            interface ICommitRequest {

                /** CommitRequest database */
                database?: (string|null);

                /** CommitRequest writes */
                writes?: (google.firestore.v1beta1.IWrite[]|null);

                /** CommitRequest transaction */
                transaction?: (Uint8Array|null);
            }

            /** Represents a CommitRequest. */
            class CommitRequest implements ICommitRequest {

                /**
                 * Constructs a new CommitRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.ICommitRequest);

                /** CommitRequest database. */
                public database: string;

                /** CommitRequest writes. */
                public writes: google.firestore.v1beta1.IWrite[];

                /** CommitRequest transaction. */
                public transaction: Uint8Array;

                /**
                 * Creates a CommitRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommitRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.CommitRequest;

                /**
                 * Creates a plain object from a CommitRequest message. Also converts values to other types if specified.
                 * @param message CommitRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.CommitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommitRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CommitResponse. */
            interface ICommitResponse {

                /** CommitResponse writeResults */
                writeResults?: (google.firestore.v1beta1.IWriteResult[]|null);

                /** CommitResponse commitTime */
                commitTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a CommitResponse. */
            class CommitResponse implements ICommitResponse {

                /**
                 * Constructs a new CommitResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.ICommitResponse);

                /** CommitResponse writeResults. */
                public writeResults: google.firestore.v1beta1.IWriteResult[];

                /** CommitResponse commitTime. */
                public commitTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a CommitResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommitResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.CommitResponse;

                /**
                 * Creates a plain object from a CommitResponse message. Also converts values to other types if specified.
                 * @param message CommitResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.CommitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommitResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RollbackRequest. */
            interface IRollbackRequest {

                /** RollbackRequest database */
                database?: (string|null);

                /** RollbackRequest transaction */
                transaction?: (Uint8Array|null);
            }

            /** Represents a RollbackRequest. */
            class RollbackRequest implements IRollbackRequest {

                /**
                 * Constructs a new RollbackRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IRollbackRequest);

                /** RollbackRequest database. */
                public database: string;

                /** RollbackRequest transaction. */
                public transaction: Uint8Array;

                /**
                 * Creates a RollbackRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RollbackRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.RollbackRequest;

                /**
                 * Creates a plain object from a RollbackRequest message. Also converts values to other types if specified.
                 * @param message RollbackRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.RollbackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RollbackRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RunQueryRequest. */
            interface IRunQueryRequest {

                /** RunQueryRequest parent */
                parent?: (string|null);

                /** RunQueryRequest structuredQuery */
                structuredQuery?: (google.firestore.v1beta1.IStructuredQuery|null);

                /** RunQueryRequest transaction */
                transaction?: (Uint8Array|null);

                /** RunQueryRequest newTransaction */
                newTransaction?: (google.firestore.v1beta1.ITransactionOptions|null);

                /** RunQueryRequest readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a RunQueryRequest. */
            class RunQueryRequest implements IRunQueryRequest {

                /**
                 * Constructs a new RunQueryRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IRunQueryRequest);

                /** RunQueryRequest parent. */
                public parent: string;

                /** RunQueryRequest structuredQuery. */
                public structuredQuery?: (google.firestore.v1beta1.IStructuredQuery|null);

                /** RunQueryRequest transaction. */
                public transaction: Uint8Array;

                /** RunQueryRequest newTransaction. */
                public newTransaction?: (google.firestore.v1beta1.ITransactionOptions|null);

                /** RunQueryRequest readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** RunQueryRequest queryType. */
                public queryType?: "structuredQuery";

                /** RunQueryRequest consistencySelector. */
                public consistencySelector?: ("transaction"|"newTransaction"|"readTime");

                /**
                 * Creates a RunQueryRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RunQueryRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.RunQueryRequest;

                /**
                 * Creates a plain object from a RunQueryRequest message. Also converts values to other types if specified.
                 * @param message RunQueryRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.RunQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RunQueryRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RunQueryResponse. */
            interface IRunQueryResponse {

                /** RunQueryResponse transaction */
                transaction?: (Uint8Array|null);

                /** RunQueryResponse document */
                document?: (google.firestore.v1beta1.IDocument|null);

                /** RunQueryResponse readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** RunQueryResponse skippedResults */
                skippedResults?: (number|null);
            }

            /** Represents a RunQueryResponse. */
            class RunQueryResponse implements IRunQueryResponse {

                /**
                 * Constructs a new RunQueryResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IRunQueryResponse);

                /** RunQueryResponse transaction. */
                public transaction: Uint8Array;

                /** RunQueryResponse document. */
                public document?: (google.firestore.v1beta1.IDocument|null);

                /** RunQueryResponse readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** RunQueryResponse skippedResults. */
                public skippedResults: number;

                /**
                 * Creates a RunQueryResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RunQueryResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.RunQueryResponse;

                /**
                 * Creates a plain object from a RunQueryResponse message. Also converts values to other types if specified.
                 * @param message RunQueryResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.RunQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RunQueryResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WriteRequest. */
            interface IWriteRequest {

                /** WriteRequest database */
                database?: (string|null);

                /** WriteRequest streamId */
                streamId?: (string|null);

                /** WriteRequest writes */
                writes?: (google.firestore.v1beta1.IWrite[]|null);

                /** WriteRequest streamToken */
                streamToken?: (Uint8Array|null);

                /** WriteRequest labels */
                labels?: ({ [k: string]: string }|null);
            }

            /** Represents a WriteRequest. */
            class WriteRequest implements IWriteRequest {

                /**
                 * Constructs a new WriteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IWriteRequest);

                /** WriteRequest database. */
                public database: string;

                /** WriteRequest streamId. */
                public streamId: string;

                /** WriteRequest writes. */
                public writes: google.firestore.v1beta1.IWrite[];

                /** WriteRequest streamToken. */
                public streamToken: Uint8Array;

                /** WriteRequest labels. */
                public labels: { [k: string]: string };

                /**
                 * Creates a WriteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.WriteRequest;

                /**
                 * Creates a plain object from a WriteRequest message. Also converts values to other types if specified.
                 * @param message WriteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.WriteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WriteResponse. */
            interface IWriteResponse {

                /** WriteResponse streamId */
                streamId?: (string|null);

                /** WriteResponse streamToken */
                streamToken?: (Uint8Array|null);

                /** WriteResponse writeResults */
                writeResults?: (google.firestore.v1beta1.IWriteResult[]|null);

                /** WriteResponse commitTime */
                commitTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a WriteResponse. */
            class WriteResponse implements IWriteResponse {

                /**
                 * Constructs a new WriteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IWriteResponse);

                /** WriteResponse streamId. */
                public streamId: string;

                /** WriteResponse streamToken. */
                public streamToken: Uint8Array;

                /** WriteResponse writeResults. */
                public writeResults: google.firestore.v1beta1.IWriteResult[];

                /** WriteResponse commitTime. */
                public commitTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a WriteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.WriteResponse;

                /**
                 * Creates a plain object from a WriteResponse message. Also converts values to other types if specified.
                 * @param message WriteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.WriteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListenRequest. */
            interface IListenRequest {

                /** ListenRequest database */
                database?: (string|null);

                /** ListenRequest addTarget */
                addTarget?: (google.firestore.v1beta1.ITarget|null);

                /** ListenRequest removeTarget */
                removeTarget?: (number|null);

                /** ListenRequest labels */
                labels?: ({ [k: string]: string }|null);
            }

            /** Represents a ListenRequest. */
            class ListenRequest implements IListenRequest {

                /**
                 * Constructs a new ListenRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IListenRequest);

                /** ListenRequest database. */
                public database: string;

                /** ListenRequest addTarget. */
                public addTarget?: (google.firestore.v1beta1.ITarget|null);

                /** ListenRequest removeTarget. */
                public removeTarget: number;

                /** ListenRequest labels. */
                public labels: { [k: string]: string };

                /** ListenRequest targetChange. */
                public targetChange?: ("addTarget"|"removeTarget");

                /**
                 * Creates a ListenRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListenRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ListenRequest;

                /**
                 * Creates a plain object from a ListenRequest message. Also converts values to other types if specified.
                 * @param message ListenRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ListenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListenRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListenResponse. */
            interface IListenResponse {

                /** ListenResponse targetChange */
                targetChange?: (google.firestore.v1beta1.ITargetChange|null);

                /** ListenResponse documentChange */
                documentChange?: (google.firestore.v1beta1.IDocumentChange|null);

                /** ListenResponse documentDelete */
                documentDelete?: (google.firestore.v1beta1.IDocumentDelete|null);

                /** ListenResponse documentRemove */
                documentRemove?: (google.firestore.v1beta1.IDocumentRemove|null);

                /** ListenResponse filter */
                filter?: (google.firestore.v1beta1.IExistenceFilter|null);
            }

            /** Represents a ListenResponse. */
            class ListenResponse implements IListenResponse {

                /**
                 * Constructs a new ListenResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IListenResponse);

                /** ListenResponse targetChange. */
                public targetChange?: (google.firestore.v1beta1.ITargetChange|null);

                /** ListenResponse documentChange. */
                public documentChange?: (google.firestore.v1beta1.IDocumentChange|null);

                /** ListenResponse documentDelete. */
                public documentDelete?: (google.firestore.v1beta1.IDocumentDelete|null);

                /** ListenResponse documentRemove. */
                public documentRemove?: (google.firestore.v1beta1.IDocumentRemove|null);

                /** ListenResponse filter. */
                public filter?: (google.firestore.v1beta1.IExistenceFilter|null);

                /** ListenResponse responseType. */
                public responseType?: ("targetChange"|"documentChange"|"documentDelete"|"documentRemove"|"filter");

                /**
                 * Creates a ListenResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListenResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ListenResponse;

                /**
                 * Creates a plain object from a ListenResponse message. Also converts values to other types if specified.
                 * @param message ListenResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ListenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListenResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Target. */
            interface ITarget {

                /** Target query */
                query?: (google.firestore.v1beta1.Target.IQueryTarget|null);

                /** Target documents */
                documents?: (google.firestore.v1beta1.Target.IDocumentsTarget|null);

                /** Target resumeToken */
                resumeToken?: (Uint8Array|null);

                /** Target readTime */
                readTime?: (google.protobuf.ITimestamp|null);

                /** Target targetId */
                targetId?: (number|null);

                /** Target once */
                once?: (boolean|null);
            }

            /** Represents a Target. */
            class Target implements ITarget {

                /**
                 * Constructs a new Target.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.ITarget);

                /** Target query. */
                public query?: (google.firestore.v1beta1.Target.IQueryTarget|null);

                /** Target documents. */
                public documents?: (google.firestore.v1beta1.Target.IDocumentsTarget|null);

                /** Target resumeToken. */
                public resumeToken: Uint8Array;

                /** Target readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /** Target targetId. */
                public targetId: number;

                /** Target once. */
                public once: boolean;

                /** Target targetType. */
                public targetType?: ("query"|"documents");

                /** Target resumeType. */
                public resumeType?: ("resumeToken"|"readTime");

                /**
                 * Creates a Target message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Target
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Target;

                /**
                 * Creates a plain object from a Target message. Also converts values to other types if specified.
                 * @param message Target
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Target to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Target {

                /** Properties of a DocumentsTarget. */
                interface IDocumentsTarget {

                    /** DocumentsTarget documents */
                    documents?: (string[]|null);
                }

                /** Represents a DocumentsTarget. */
                class DocumentsTarget implements IDocumentsTarget {

                    /**
                     * Constructs a new DocumentsTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.Target.IDocumentsTarget);

                    /** DocumentsTarget documents. */
                    public documents: string[];

                    /**
                     * Creates a DocumentsTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentsTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Target.DocumentsTarget;

                    /**
                     * Creates a plain object from a DocumentsTarget message. Also converts values to other types if specified.
                     * @param message DocumentsTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.Target.DocumentsTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentsTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryTarget. */
                interface IQueryTarget {

                    /** QueryTarget parent */
                    parent?: (string|null);

                    /** QueryTarget structuredQuery */
                    structuredQuery?: (google.firestore.v1beta1.IStructuredQuery|null);
                }

                /** Represents a QueryTarget. */
                class QueryTarget implements IQueryTarget {

                    /**
                     * Constructs a new QueryTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.Target.IQueryTarget);

                    /** QueryTarget parent. */
                    public parent: string;

                    /** QueryTarget structuredQuery. */
                    public structuredQuery?: (google.firestore.v1beta1.IStructuredQuery|null);

                    /** QueryTarget queryType. */
                    public queryType?: "structuredQuery";

                    /**
                     * Creates a QueryTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Target.QueryTarget;

                    /**
                     * Creates a plain object from a QueryTarget message. Also converts values to other types if specified.
                     * @param message QueryTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.Target.QueryTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a TargetChange. */
            interface ITargetChange {

                /** TargetChange targetChangeType */
                targetChangeType?: (google.firestore.v1beta1.TargetChange.TargetChangeType|null);

                /** TargetChange targetIds */
                targetIds?: (number[]|null);

                /** TargetChange cause */
                cause?: (google.rpc.IStatus|null);

                /** TargetChange resumeToken */
                resumeToken?: (Uint8Array|null);

                /** TargetChange readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a TargetChange. */
            class TargetChange implements ITargetChange {

                /**
                 * Constructs a new TargetChange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.ITargetChange);

                /** TargetChange targetChangeType. */
                public targetChangeType: google.firestore.v1beta1.TargetChange.TargetChangeType;

                /** TargetChange targetIds. */
                public targetIds: number[];

                /** TargetChange cause. */
                public cause?: (google.rpc.IStatus|null);

                /** TargetChange resumeToken. */
                public resumeToken: Uint8Array;

                /** TargetChange readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a TargetChange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TargetChange
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.TargetChange;

                /**
                 * Creates a plain object from a TargetChange message. Also converts values to other types if specified.
                 * @param message TargetChange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.TargetChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TargetChange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace TargetChange {

                /** TargetChangeType enum. */
                type TargetChangeType =
                    "NO_CHANGE"| "ADD"| "REMOVE"| "CURRENT"| "RESET";
            }

            /** Properties of a ListCollectionIdsRequest. */
            interface IListCollectionIdsRequest {

                /** ListCollectionIdsRequest parent */
                parent?: (string|null);

                /** ListCollectionIdsRequest pageSize */
                pageSize?: (number|null);

                /** ListCollectionIdsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListCollectionIdsRequest. */
            class ListCollectionIdsRequest implements IListCollectionIdsRequest {

                /**
                 * Constructs a new ListCollectionIdsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IListCollectionIdsRequest);

                /** ListCollectionIdsRequest parent. */
                public parent: string;

                /** ListCollectionIdsRequest pageSize. */
                public pageSize: number;

                /** ListCollectionIdsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a ListCollectionIdsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListCollectionIdsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ListCollectionIdsRequest;

                /**
                 * Creates a plain object from a ListCollectionIdsRequest message. Also converts values to other types if specified.
                 * @param message ListCollectionIdsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ListCollectionIdsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListCollectionIdsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListCollectionIdsResponse. */
            interface IListCollectionIdsResponse {

                /** ListCollectionIdsResponse collectionIds */
                collectionIds?: (string[]|null);

                /** ListCollectionIdsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListCollectionIdsResponse. */
            class ListCollectionIdsResponse implements IListCollectionIdsResponse {

                /**
                 * Constructs a new ListCollectionIdsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IListCollectionIdsResponse);

                /** ListCollectionIdsResponse collectionIds. */
                public collectionIds: string[];

                /** ListCollectionIdsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a ListCollectionIdsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListCollectionIdsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ListCollectionIdsResponse;

                /**
                 * Creates a plain object from a ListCollectionIdsResponse message. Also converts values to other types if specified.
                 * @param message ListCollectionIdsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ListCollectionIdsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListCollectionIdsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StructuredQuery. */
            interface IStructuredQuery {

                /** StructuredQuery select */
                select?: (google.firestore.v1beta1.StructuredQuery.IProjection|null);

                /** StructuredQuery from */
                from?: (google.firestore.v1beta1.StructuredQuery.ICollectionSelector[]|null);

                /** StructuredQuery where */
                where?: (google.firestore.v1beta1.StructuredQuery.IFilter|null);

                /** StructuredQuery orderBy */
                orderBy?: (google.firestore.v1beta1.StructuredQuery.IOrder[]|null);

                /** StructuredQuery startAt */
                startAt?: (google.firestore.v1beta1.ICursor|null);

                /** StructuredQuery endAt */
                endAt?: (google.firestore.v1beta1.ICursor|null);

                /** StructuredQuery offset */
                offset?: (number|null);

                /** StructuredQuery limit */
                limit?: (google.protobuf.IInt32Value|null);
            }

            /** Represents a StructuredQuery. */
            class StructuredQuery implements IStructuredQuery {

                /**
                 * Constructs a new StructuredQuery.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IStructuredQuery);

                /** StructuredQuery select. */
                public select?: (google.firestore.v1beta1.StructuredQuery.IProjection|null);

                /** StructuredQuery from. */
                public from: google.firestore.v1beta1.StructuredQuery.ICollectionSelector[];

                /** StructuredQuery where. */
                public where?: (google.firestore.v1beta1.StructuredQuery.IFilter|null);

                /** StructuredQuery orderBy. */
                public orderBy: google.firestore.v1beta1.StructuredQuery.IOrder[];

                /** StructuredQuery startAt. */
                public startAt?: (google.firestore.v1beta1.ICursor|null);

                /** StructuredQuery endAt. */
                public endAt?: (google.firestore.v1beta1.ICursor|null);

                /** StructuredQuery offset. */
                public offset: number;

                /** StructuredQuery limit. */
                public limit?: (google.protobuf.IInt32Value|null);

                /**
                 * Creates a StructuredQuery message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StructuredQuery
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery;

                /**
                 * Creates a plain object from a StructuredQuery message. Also converts values to other types if specified.
                 * @param message StructuredQuery
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.StructuredQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StructuredQuery to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace StructuredQuery {

                /** Properties of a CollectionSelector. */
                interface ICollectionSelector {

                    /** CollectionSelector collectionId */
                    collectionId?: (string|null);

                    /** CollectionSelector allDescendants */
                    allDescendants?: (boolean|null);
                }

                /** Represents a CollectionSelector. */
                class CollectionSelector implements ICollectionSelector {

                    /**
                     * Constructs a new CollectionSelector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.ICollectionSelector);

                    /** CollectionSelector collectionId. */
                    public collectionId: string;

                    /** CollectionSelector allDescendants. */
                    public allDescendants: boolean;

                    /**
                     * Creates a CollectionSelector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CollectionSelector
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.CollectionSelector;

                    /**
                     * Creates a plain object from a CollectionSelector message. Also converts values to other types if specified.
                     * @param message CollectionSelector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.CollectionSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CollectionSelector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Filter. */
                interface IFilter {

                    /** Filter compositeFilter */
                    compositeFilter?: (google.firestore.v1beta1.StructuredQuery.ICompositeFilter|null);

                    /** Filter fieldFilter */
                    fieldFilter?: (google.firestore.v1beta1.StructuredQuery.IFieldFilter|null);

                    /** Filter unaryFilter */
                    unaryFilter?: (google.firestore.v1beta1.StructuredQuery.IUnaryFilter|null);
                }

                /** Represents a Filter. */
                class Filter implements IFilter {

                    /**
                     * Constructs a new Filter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.IFilter);

                    /** Filter compositeFilter. */
                    public compositeFilter?: (google.firestore.v1beta1.StructuredQuery.ICompositeFilter|null);

                    /** Filter fieldFilter. */
                    public fieldFilter?: (google.firestore.v1beta1.StructuredQuery.IFieldFilter|null);

                    /** Filter unaryFilter. */
                    public unaryFilter?: (google.firestore.v1beta1.StructuredQuery.IUnaryFilter|null);

                    /** Filter filterType. */
                    public filterType?: ("compositeFilter"|"fieldFilter"|"unaryFilter");

                    /**
                     * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Filter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.Filter;

                    /**
                     * Creates a plain object from a Filter message. Also converts values to other types if specified.
                     * @param message Filter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Filter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CompositeFilter. */
                interface ICompositeFilter {

                    /** CompositeFilter op */
                    op?: (google.firestore.v1beta1.StructuredQuery.CompositeFilter.Operator|null);

                    /** CompositeFilter filters */
                    filters?: (google.firestore.v1beta1.StructuredQuery.IFilter[]|null);
                }

                /** Represents a CompositeFilter. */
                class CompositeFilter implements ICompositeFilter {

                    /**
                     * Constructs a new CompositeFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.ICompositeFilter);

                    /** CompositeFilter op. */
                    public op: google.firestore.v1beta1.StructuredQuery.CompositeFilter.Operator;

                    /** CompositeFilter filters. */
                    public filters: google.firestore.v1beta1.StructuredQuery.IFilter[];

                    /**
                     * Creates a CompositeFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompositeFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.CompositeFilter;

                    /**
                     * Creates a plain object from a CompositeFilter message. Also converts values to other types if specified.
                     * @param message CompositeFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.CompositeFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompositeFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CompositeFilter {

                    /** Operator enum. */
                    type Operator =
                        "OPERATOR_UNSPECIFIED"| "AND";
                }

                /** Properties of a FieldFilter. */
                interface IFieldFilter {

                    /** FieldFilter field */
                    field?: (google.firestore.v1beta1.StructuredQuery.IFieldReference|null);

                    /** FieldFilter op */
                    op?: (google.firestore.v1beta1.StructuredQuery.FieldFilter.Operator|null);

                    /** FieldFilter value */
                    value?: (google.firestore.v1beta1.IValue|null);
                }

                /** Represents a FieldFilter. */
                class FieldFilter implements IFieldFilter {

                    /**
                     * Constructs a new FieldFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.IFieldFilter);

                    /** FieldFilter field. */
                    public field?: (google.firestore.v1beta1.StructuredQuery.IFieldReference|null);

                    /** FieldFilter op. */
                    public op: google.firestore.v1beta1.StructuredQuery.FieldFilter.Operator;

                    /** FieldFilter value. */
                    public value?: (google.firestore.v1beta1.IValue|null);

                    /**
                     * Creates a FieldFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.FieldFilter;

                    /**
                     * Creates a plain object from a FieldFilter message. Also converts values to other types if specified.
                     * @param message FieldFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.FieldFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FieldFilter {

                    /** Operator enum. */
                    type Operator =
                        "OPERATOR_UNSPECIFIED"| "LESS_THAN"| "LESS_THAN_OR_EQUAL"| "GREATER_THAN"| "GREATER_THAN_OR_EQUAL"| "EQUAL"| "ARRAY_CONTAINS"| "IN"| "ARRAY_CONTAINS_ANY";
                }

                /** Properties of an UnaryFilter. */
                interface IUnaryFilter {

                    /** UnaryFilter op */
                    op?: (google.firestore.v1beta1.StructuredQuery.UnaryFilter.Operator|null);

                    /** UnaryFilter field */
                    field?: (google.firestore.v1beta1.StructuredQuery.IFieldReference|null);
                }

                /** Represents an UnaryFilter. */
                class UnaryFilter implements IUnaryFilter {

                    /**
                     * Constructs a new UnaryFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.IUnaryFilter);

                    /** UnaryFilter op. */
                    public op: google.firestore.v1beta1.StructuredQuery.UnaryFilter.Operator;

                    /** UnaryFilter field. */
                    public field?: (google.firestore.v1beta1.StructuredQuery.IFieldReference|null);

                    /** UnaryFilter operandType. */
                    public operandType?: "field";

                    /**
                     * Creates an UnaryFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UnaryFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.UnaryFilter;

                    /**
                     * Creates a plain object from an UnaryFilter message. Also converts values to other types if specified.
                     * @param message UnaryFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.UnaryFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UnaryFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace UnaryFilter {

                    /** Operator enum. */
                    type Operator =
                        "OPERATOR_UNSPECIFIED"| "IS_NAN"| "IS_NULL";
                }

                /** Properties of an Order. */
                interface IOrder {

                    /** Order field */
                    field?: (google.firestore.v1beta1.StructuredQuery.IFieldReference|null);

                    /** Order direction */
                    direction?: (google.firestore.v1beta1.StructuredQuery.Direction|null);
                }

                /** Represents an Order. */
                class Order implements IOrder {

                    /**
                     * Constructs a new Order.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.IOrder);

                    /** Order field. */
                    public field?: (google.firestore.v1beta1.StructuredQuery.IFieldReference|null);

                    /** Order direction. */
                    public direction: google.firestore.v1beta1.StructuredQuery.Direction;

                    /**
                     * Creates an Order message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Order
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.Order;

                    /**
                     * Creates a plain object from an Order message. Also converts values to other types if specified.
                     * @param message Order
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Order to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FieldReference. */
                interface IFieldReference {

                    /** FieldReference fieldPath */
                    fieldPath?: (string|null);
                }

                /** Represents a FieldReference. */
                class FieldReference implements IFieldReference {

                    /**
                     * Constructs a new FieldReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.IFieldReference);

                    /** FieldReference fieldPath. */
                    public fieldPath: string;

                    /**
                     * Creates a FieldReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.FieldReference;

                    /**
                     * Creates a plain object from a FieldReference message. Also converts values to other types if specified.
                     * @param message FieldReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.FieldReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Projection. */
                interface IProjection {

                    /** Projection fields */
                    fields?: (google.firestore.v1beta1.StructuredQuery.IFieldReference[]|null);
                }

                /** Represents a Projection. */
                class Projection implements IProjection {

                    /**
                     * Constructs a new Projection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.StructuredQuery.IProjection);

                    /** Projection fields. */
                    public fields: google.firestore.v1beta1.StructuredQuery.IFieldReference[];

                    /**
                     * Creates a Projection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Projection
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.StructuredQuery.Projection;

                    /**
                     * Creates a plain object from a Projection message. Also converts values to other types if specified.
                     * @param message Projection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.StructuredQuery.Projection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Projection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Direction enum. */
                type Direction =
                    "DIRECTION_UNSPECIFIED"| "ASCENDING"| "DESCENDING";
            }

            /** Properties of a Cursor. */
            interface ICursor {

                /** Cursor values */
                values?: (google.firestore.v1beta1.IValue[]|null);

                /** Cursor before */
                before?: (boolean|null);
            }

            /** Represents a Cursor. */
            class Cursor implements ICursor {

                /**
                 * Constructs a new Cursor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.ICursor);

                /** Cursor values. */
                public values: google.firestore.v1beta1.IValue[];

                /** Cursor before. */
                public before: boolean;

                /**
                 * Creates a Cursor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Cursor
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Cursor;

                /**
                 * Creates a plain object from a Cursor message. Also converts values to other types if specified.
                 * @param message Cursor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.Cursor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Cursor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Write. */
            interface IWrite {

                /** Write update */
                update?: (google.firestore.v1beta1.IDocument|null);

                /** Write delete */
                "delete"?: (string|null);

                /** Write transform */
                transform?: (google.firestore.v1beta1.IDocumentTransform|null);

                /** Write updateMask */
                updateMask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** Write currentDocument */
                currentDocument?: (google.firestore.v1beta1.IPrecondition|null);
            }

            /** Represents a Write. */
            class Write implements IWrite {

                /**
                 * Constructs a new Write.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IWrite);

                /** Write update. */
                public update?: (google.firestore.v1beta1.IDocument|null);

                /** Write delete. */
                public delete: string;

                /** Write transform. */
                public transform?: (google.firestore.v1beta1.IDocumentTransform|null);

                /** Write updateMask. */
                public updateMask?: (google.firestore.v1beta1.IDocumentMask|null);

                /** Write currentDocument. */
                public currentDocument?: (google.firestore.v1beta1.IPrecondition|null);

                /** Write operation. */
                public operation?: ("update"|"delete"|"transform");

                /**
                 * Creates a Write message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Write
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.Write;

                /**
                 * Creates a plain object from a Write message. Also converts values to other types if specified.
                 * @param message Write
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.Write, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Write to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DocumentTransform. */
            interface IDocumentTransform {

                /** DocumentTransform document */
                document?: (string|null);

                /** DocumentTransform fieldTransforms */
                fieldTransforms?: (google.firestore.v1beta1.DocumentTransform.IFieldTransform[]|null);
            }

            /** Represents a DocumentTransform. */
            class DocumentTransform implements IDocumentTransform {

                /**
                 * Constructs a new DocumentTransform.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IDocumentTransform);

                /** DocumentTransform document. */
                public document: string;

                /** DocumentTransform fieldTransforms. */
                public fieldTransforms: google.firestore.v1beta1.DocumentTransform.IFieldTransform[];

                /**
                 * Creates a DocumentTransform message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentTransform
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.DocumentTransform;

                /**
                 * Creates a plain object from a DocumentTransform message. Also converts values to other types if specified.
                 * @param message DocumentTransform
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.DocumentTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentTransform to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace DocumentTransform {

                /** Properties of a FieldTransform. */
                interface IFieldTransform {

                    /** FieldTransform fieldPath */
                    fieldPath?: (string|null);

                    /** FieldTransform setToServerValue */
                    setToServerValue?: (google.firestore.v1beta1.DocumentTransform.FieldTransform.ServerValue|null);

                    /** FieldTransform increment */
                    increment?: (google.firestore.v1beta1.IValue|null);

                    /** FieldTransform maximum */
                    maximum?: (google.firestore.v1beta1.IValue|null);

                    /** FieldTransform minimum */
                    minimum?: (google.firestore.v1beta1.IValue|null);

                    /** FieldTransform appendMissingElements */
                    appendMissingElements?: (google.firestore.v1beta1.IArrayValue|null);

                    /** FieldTransform removeAllFromArray */
                    removeAllFromArray?: (google.firestore.v1beta1.IArrayValue|null);
                }

                /** Represents a FieldTransform. */
                class FieldTransform implements IFieldTransform {

                    /**
                     * Constructs a new FieldTransform.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.v1beta1.DocumentTransform.IFieldTransform);

                    /** FieldTransform fieldPath. */
                    public fieldPath: string;

                    /** FieldTransform setToServerValue. */
                    public setToServerValue: google.firestore.v1beta1.DocumentTransform.FieldTransform.ServerValue;

                    /** FieldTransform increment. */
                    public increment?: (google.firestore.v1beta1.IValue|null);

                    /** FieldTransform maximum. */
                    public maximum?: (google.firestore.v1beta1.IValue|null);

                    /** FieldTransform minimum. */
                    public minimum?: (google.firestore.v1beta1.IValue|null);

                    /** FieldTransform appendMissingElements. */
                    public appendMissingElements?: (google.firestore.v1beta1.IArrayValue|null);

                    /** FieldTransform removeAllFromArray. */
                    public removeAllFromArray?: (google.firestore.v1beta1.IArrayValue|null);

                    /** FieldTransform transformType. */
                    public transformType?: ("setToServerValue"|"increment"|"maximum"|"minimum"|"appendMissingElements"|"removeAllFromArray");

                    /**
                     * Creates a FieldTransform message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldTransform
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.DocumentTransform.FieldTransform;

                    /**
                     * Creates a plain object from a FieldTransform message. Also converts values to other types if specified.
                     * @param message FieldTransform
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.v1beta1.DocumentTransform.FieldTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldTransform to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FieldTransform {

                    /** ServerValue enum. */
                    type ServerValue =
                        "SERVER_VALUE_UNSPECIFIED"| "REQUEST_TIME";
                }
            }

            /** Properties of a WriteResult. */
            interface IWriteResult {

                /** WriteResult updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** WriteResult transformResults */
                transformResults?: (google.firestore.v1beta1.IValue[]|null);
            }

            /** Represents a WriteResult. */
            class WriteResult implements IWriteResult {

                /**
                 * Constructs a new WriteResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IWriteResult);

                /** WriteResult updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** WriteResult transformResults. */
                public transformResults: google.firestore.v1beta1.IValue[];

                /**
                 * Creates a WriteResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WriteResult
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.WriteResult;

                /**
                 * Creates a plain object from a WriteResult message. Also converts values to other types if specified.
                 * @param message WriteResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.WriteResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WriteResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DocumentChange. */
            interface IDocumentChange {

                /** DocumentChange document */
                document?: (google.firestore.v1beta1.IDocument|null);

                /** DocumentChange targetIds */
                targetIds?: (number[]|null);

                /** DocumentChange removedTargetIds */
                removedTargetIds?: (number[]|null);
            }

            /** Represents a DocumentChange. */
            class DocumentChange implements IDocumentChange {

                /**
                 * Constructs a new DocumentChange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IDocumentChange);

                /** DocumentChange document. */
                public document?: (google.firestore.v1beta1.IDocument|null);

                /** DocumentChange targetIds. */
                public targetIds: number[];

                /** DocumentChange removedTargetIds. */
                public removedTargetIds: number[];

                /**
                 * Creates a DocumentChange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentChange
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.DocumentChange;

                /**
                 * Creates a plain object from a DocumentChange message. Also converts values to other types if specified.
                 * @param message DocumentChange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.DocumentChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentChange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DocumentDelete. */
            interface IDocumentDelete {

                /** DocumentDelete document */
                document?: (string|null);

                /** DocumentDelete removedTargetIds */
                removedTargetIds?: (number[]|null);

                /** DocumentDelete readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a DocumentDelete. */
            class DocumentDelete implements IDocumentDelete {

                /**
                 * Constructs a new DocumentDelete.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IDocumentDelete);

                /** DocumentDelete document. */
                public document: string;

                /** DocumentDelete removedTargetIds. */
                public removedTargetIds: number[];

                /** DocumentDelete readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a DocumentDelete message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentDelete
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.DocumentDelete;

                /**
                 * Creates a plain object from a DocumentDelete message. Also converts values to other types if specified.
                 * @param message DocumentDelete
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.DocumentDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentDelete to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DocumentRemove. */
            interface IDocumentRemove {

                /** DocumentRemove document */
                document?: (string|null);

                /** DocumentRemove removedTargetIds */
                removedTargetIds?: (number[]|null);

                /** DocumentRemove readTime */
                readTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a DocumentRemove. */
            class DocumentRemove implements IDocumentRemove {

                /**
                 * Constructs a new DocumentRemove.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IDocumentRemove);

                /** DocumentRemove document. */
                public document: string;

                /** DocumentRemove removedTargetIds. */
                public removedTargetIds: number[];

                /** DocumentRemove readTime. */
                public readTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a DocumentRemove message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DocumentRemove
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.DocumentRemove;

                /**
                 * Creates a plain object from a DocumentRemove message. Also converts values to other types if specified.
                 * @param message DocumentRemove
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.DocumentRemove, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DocumentRemove to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ExistenceFilter. */
            interface IExistenceFilter {

                /** ExistenceFilter targetId */
                targetId?: (number|null);

                /** ExistenceFilter count */
                count?: (number|null);
            }

            /** Represents an ExistenceFilter. */
            class ExistenceFilter implements IExistenceFilter {

                /**
                 * Constructs a new ExistenceFilter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.firestore.v1beta1.IExistenceFilter);

                /** ExistenceFilter targetId. */
                public targetId: number;

                /** ExistenceFilter count. */
                public count: number;

                /**
                 * Creates an ExistenceFilter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExistenceFilter
                 */
                public static fromObject(object: { [k: string]: any }): google.firestore.v1beta1.ExistenceFilter;

                /**
                 * Creates a plain object from an ExistenceFilter message. Also converts values to other types if specified.
                 * @param message ExistenceFilter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.firestore.v1beta1.ExistenceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExistenceFilter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        type FieldBehavior =
            "FIELD_BEHAVIOR_UNSPECIFIED"| "OPTIONAL"| "REQUIRED"| "OUTPUT_ONLY"| "INPUT_ONLY"| "IMMUTABLE";

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: google.api.ResourceDescriptor.History;

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            type History =
                "HISTORY_UNSPECIFIED"| "ORIGINALLY_SINGLE_PATTERN"| "FUTURE_MULTI_PATTERN";
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatLng
             */
            public static fromObject(object: { [k: string]: any }): google.type.LatLng;

            /**
             * Creates a plain object from a LatLng message. Also converts values to other types if specified.
             * @param message LatLng
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LatLng, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatLng to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
